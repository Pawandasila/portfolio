import type { Metadata } from "next";
import { Georama, Roboto } from "next/font/google";
import "./globals.css";

const georama = Georama({
  variable: "--font-georama",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Pawan Dasila - Full-Stack Developer & AI Innovator",
  description:
    "Passionate software engineer specializing in modern web technologies, AI/ML integration, and scalable application development. Proven track record of delivering high-impact solutions that drive business growth.",
  keywords:
    "Full-Stack Developer, AI Developer, React, Next.js, Node.js, JavaScript, Python, Web Development, Software Engineer, Portfolio",
  authors: [{ name: "Pawan Dasila" }],
  creator: "Pawan Dasila",
  openGraph: {
    title: "Pawan Dasila - Full-Stack Developer & AI Innovator",
    description:
      "Passionate software engineer specializing in modern web technologies, AI/ML integration, and scalable application development.",
    type: "website",
    locale: "en_US",
    siteName: "Pawan Dasila Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawan Dasila - Full-Stack Developer & AI Innovator",
    description:
      "Passionate software engineer specializing in modern web technologies, AI/ML integration, and scalable application development.",
    creator: "@dasila0612",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${georama.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
