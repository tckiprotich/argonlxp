import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize SES client
const sesClient = new SESClient({
  region: process.env.MAWS_SES_REGION!,
  credentials: {
    accessKeyId: process.env.MAWS_SES_ACCESS_KEY!,
    secretAccessKey: process.env.MAWS_SES_SECRET_KEY!,
  }
});

interface EmailOptions {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Send email using AWS SES
 */
export async function sendEmail({ to, subject, text, html }: EmailOptions): Promise<void> {
  // Convert recipients to array if string
  const recipients = Array.isArray(to) ? to : [to];
  
  try {
    const command = new SendEmailCommand({
      Source: `${process.env.SENDER_NAME} <${process.env.SENDER_EMAIL}>`,
      Destination: {
        ToAddresses: recipients,
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: "UTF-8",
        },
        Body: {
          ...(text && {
            Text: {
              Data: text,
              Charset: "UTF-8",
            },
          }),
          ...(html && {
            Html: {
              Data: html,
              Charset: "UTF-8",
            },
          }),
        },
      },
    });

    await sesClient.send(command);
    console.log(`Email sent successfully to ${recipients.join(', ')}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

/**
 * Generate welcome email for waitlist confirmation
 * This function doesn't use react-email to avoid the prettier dependency issue
 */
export function generateWaitlistConfirmationEmail(name: string): { subject: string; text: string; html: string } {
  const subject = "Welcome to the Argon Learning Waitlist";
  
  const text = `
    Hello ${name},
    
    Thank you for joining the Argon Learning waitlist!
    
    We're excited to have you on board. You'll be one of the first to know when we launch our platform.
    
    Best regards,
    The Argon Learning Team
  `;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #10b981; padding: 20px; color: white; text-align: center; }
        .content { padding: 20px; background-color: #f9fafb; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to Argon Learning!</h1>
        </div>
        <div class="content">
          <p>Hello ${name},</p>
          
          <p>Thank you for joining our waitlist! We're excited to have you on board.</p>
          
          <p>You'll be among the first to know when we launch our platform and get access to:</p>
          
          <ul>
            <li>Priority early access</li>
            <li>Special launch pricing</li>
            <li>Exclusive product updates</li>
          </ul>
          
          <p>We're working hard to build a learning platform that helps you achieve your goals.</p>
          
          <p>Stay tuned for updates!</p>
          
          <p>Best regards,<br>The Argon Learning Team</p>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Argon Learning. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  return { subject, text, html };
}