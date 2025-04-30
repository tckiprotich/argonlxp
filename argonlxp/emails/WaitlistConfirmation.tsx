import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface WaitlistConfirmationEmailProps {
  name: string;
  organization?: string;
}

export const WaitlistConfirmationEmail = ({
  name,
  organization,
}: WaitlistConfirmationEmailProps) => {
  const formattedName = name.split(' ')[0] || name;

  return (
    <Html>
      <Head />
      <Preview>Welcome to the Argon Learning waitlist</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src="https://argonlearning.com/logo.png"
              width="140"
              height="40"
              alt="Argon Learning"
              style={logo}
            />
          </Section>
          
          <Heading style={heading}>You're on the list!</Heading>
          
          <Text style={paragraph}>
            Hi {formattedName},
          </Text>
          
          <Text style={paragraph}>
            Thank you for joining the Argon Learning waitlist! We're excited to have you as one of our early supporters.
            {organization && ` We're particularly thrilled to see interest from ${organization}.`}
          </Text>
          
          <Text style={paragraph}>
            We're working hard to build an exceptional learning platform that will transform how professionals enhance their skills. As a waitlist member, you'll:
          </Text>
          
          <Section style={bulletPoints}>
            <Text style={listItem}>• Get early access when we launch</Text>
            <Text style={listItem}>• Receive special launch pricing</Text>
            <Text style={listItem}>• Be the first to experience new features</Text>
          </Section>
          
          <Text style={paragraph}>
            We'll keep you updated on our progress and notify you when we're ready to welcome you aboard.
          </Text>
          
          <Text style={paragraph}>
            In the meantime, follow us on social media for the latest updates.
          </Text>
          
          <Section style={socialLinks}>
            <Link href="https://twitter.com/argonlearning" style={socialLink}>Twitter</Link>
            <Link href="https://linkedin.com/company/argonlearning" style={socialLink}>LinkedIn</Link>
          </Section>
          
          <Text style={paragraph}>
            If you have any questions, simply reply to this email.
          </Text>
          
          <Text style={paragraph}>
            Best regards,<br />
            The Argon Learning Team
          </Text>
          
          <Text style={footer}>
            © {new Date().getFullYear()} Argon Learning. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default WaitlistConfirmationEmail;

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const logoContainer = {
  marginBottom: '24px',
};

const logo = {
  display: 'block',
  margin: '0 auto',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#022c21',
  textAlign: 'center' as const,
  padding: '0 20px',
};

const paragraph = {
  margin: '24px 0',
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#333',
};

const bulletPoints = {
  margin: '15px 0',
};

const listItem = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#333',
  margin: '10px 0',
};

const socialLinks = {
  margin: '32px 0',
  textAlign: 'center' as const,
};

const socialLink = {
  display: 'inline-block',
  color: '#10b98c',
  marginRight: '16px',
  textDecoration: 'none',
};

const footer = {
  fontSize: '13px',
  lineHeight: '1.5',
  color: '#8898aa',
  textAlign: 'center' as const,
  marginTop: '32px',
};
