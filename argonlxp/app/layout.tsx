import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Argon LXP - Learning Experience Platform",
  description: "Enterprise learning experience platform powered by Argon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          body::before {
            content: '';
            display: block;
            height: 68px; /* Height of navbar */
          }
        `}</style>
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-[#022c21]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
