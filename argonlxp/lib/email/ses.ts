import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { render } from '@react-email/render';
import { ReactElement } from 'react';

// Configure AWS SES client
const ses = new SESClient({
  region: process.env.MAWS_SES_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.MAWS_SES_ACCESS_KEY || '',
    secretAccessKey: process.env.MAWS_SES_SECRET_KEY || '',
  },
});

// Email sender configuration
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'noreply@argonlearning.com';
const SENDER_NAME = process.env.SENDER_NAME || 'Argon Learning';

/**
 * Send an email using AWS SES with a React Email template
 */
export async function sendEmail({
  to,
  subject,
  react: emailTemplate,
  from = `${SENDER_NAME} <${SENDER_EMAIL}>`,
}: {
  to: string | string[];
  subject: string;
  react: ReactElement;
  from?: string;
}): Promise<{ success: boolean; messageId?: string; error?: any }> {
  // Validate environment configuration
  if (!process.env.MAWS_SES_ACCESS_KEY || !process.env.MAWS_SES_SECRET_KEY) {
    console.error('AWS SES credentials are not configured');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    // Convert email array to comma-separated string
    const toAddresses = Array.isArray(to) ? to : [to];
    
    // Render React Email template to HTML and text
    // Convert Promise<string> to string using await
    const html = await Promise.resolve(render(emailTemplate));
    const text = await Promise.resolve(render(emailTemplate, { plainText: true }));
    
    // Create SES send command with properly typed parameters
    const command = new SendEmailCommand({
      Source: from,
      Destination: {
        ToAddresses: toAddresses,
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: html,
            Charset: 'UTF-8',
          },
          Text: {
            Data: text,
            Charset: 'UTF-8',
          },
        },
      },
    });
    
    // Send the email
    const response = await ses.send(command);
    
    console.log(`Email sent successfully to ${toAddresses.join(', ')}`);
    return { 
      success: true, 
      messageId: response.MessageId 
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { 
      success: false, 
      error 
    };
  }
}

/**
 * Alternative sending method that doesn't rely on React Email rendering
 * Use this if you're having issues with the React Email renderer
 */
export async function sendPlainEmail({
  to,
  subject,
  html,
  text,
  from = `${SENDER_NAME} <${SENDER_EMAIL}>`,
}: {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  from?: string;
}): Promise<{ success: boolean; messageId?: string; error?: any }> {
  if (!process.env.MAWS_SES_ACCESS_KEY || !process.env.MAWS_SES_SECRET_KEY) {
    console.error('AWS SES credentials are not configured');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const toAddresses = Array.isArray(to) ? to : [to];
    
    const command = new SendEmailCommand({
      Source: from,
      Destination: {
        ToAddresses: toAddresses,
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: html,
            Charset: 'UTF-8',
          },
          Text: {
            Data: text,
            Charset: 'UTF-8',
          },
        },
      },
    });
    
    const response = await ses.send(command);
    
    console.log(`Plain email sent successfully to ${toAddresses.join(', ')}`);
    return { 
      success: true, 
      messageId: response.MessageId 
    };
  } catch (error) {
    console.error('Failed to send plain email:', error);
    return { 
      success: false, 
      error 
    };
  }
}