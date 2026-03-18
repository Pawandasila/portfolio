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

const siteConfig = {
  name: "Pawan Dasila",
  title: "Pawan Dasila — Full-Stack Developer & AI Innovator",
  description:
    "Passionate software engineer specializing in modern web technologies, AI/ML integration, and scalable application development. Proven track record of delivering high-impact solutions that drive business growth.",
  url: "https://portfolio.pawandasila.in", // 🔁 Replace with your actual domain
  ogImage: "/og-image.png",       // 🔁 Add a 1200×630 image to /public
  twitterHandle: "@dasila0612",
  locale: "en_US",
  keywords: [
    "Full-Stack Developer",
    "AI Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Web Development",
    "Software Engineer",
    "Portfolio",
    "Pawan Dasila",
    "AI/ML Integration",
    "Scalable Applications",
    "India",
    "Remote Developer",
  ],
  socials: {
    github: "https://github.com/pawandasila",
    linkedin: "https://www.linkedin.com/in/pawan-dasila-92483b251/",
    twitter: "https://twitter.com/dasila0612",
  },
};

export const metadata: Metadata = {
  // metadataBase is REQUIRED for all absolute OG/Twitter image URLs to work
  metadataBase: new URL(siteConfig.url),
 
  title: {
    default: siteConfig.title,
    // Used by child pages: "About | Pawan Dasila"
    template: `%s | ${siteConfig.name}`,
  },
 
  description: siteConfig.description,
  keywords: siteConfig.keywords,
 
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
 
  // Canonical URL — prevents duplicate content penalties
  alternates: {
    canonical: "/",
  },
 
  // ── Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Full-Stack Developer & AI Innovator`,
        type: "image/png",
      },
    ],
  },
 
  // ── Twitter / X Card ────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
 
  // ── Robots ──────────────────────────────────────────────────────────────────
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
 
  // ── Google Search Console verification ──────────────────────────────────────
  // Paste your token from Search Console → Settings → Ownership verification
  // verification: {
  //   google: "your-google-verification-token",
  //   yandex: "your-yandex-token", // optional
  // },
 
  // ── Misc ────────────────────────────────────────────────────────────────────
  category: "technology",
  referrer: "origin-when-cross-origin",
};
 
// ─── Viewport (separate export required in Next.js 14+) ──────────────────────
 
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  jobTitle: "Full-Stack Developer & AI Innovator",
  description: siteConfig.description,
  email: "mailto:your@email.com", // 🔁 Replace or remove
  sameAs: [
    siteConfig.socials.github,
    siteConfig.socials.linkedin,
    siteConfig.socials.twitter,
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "Artificial Intelligence",
    "Machine Learning",
    "Full-Stack Development",
  ],
  // If you're open to work, add this:
  // seeks: {
  //   "@type": "JobPosting",
  //   title: "Full-Stack / AI Developer roles",
  // },
};
 
// ─── Website JSON-LD (enables sitelinks search box in Google) ─────────────────
 
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${siteConfig.name} Portfolio`,
  url: siteConfig.url,
  author: {
    "@type": "Person",
    name: siteConfig.name,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${georama.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
