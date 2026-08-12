import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define base URL for absolute canonical URLs and OpenGraph assets
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nsikak-dev.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nsikak Imeh-Essien | Full-Stack Software Engineer",
    template: "%s | Nsikak Imeh-Essien",
  },
  description:
    "Full-Stack Software Engineer specializing in Next.js, React, TypeScript, Node.js, and scalable web architectures.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Engineer",
    "TypeScript",
    "Node.js",
    "Web Application Developer",
    "Portfolio",
    "Mobile Developer",
    "Frontend Developer",
    "Backend Developer",
    "API Development",
  ],
  authors: [{ name: "Nsikak Imeh-Essien", url: siteUrl }],
  creator: "Nsikak Imeh-Essien",
  publisher: "Nsikak Imeh-Essien",
  icons: {
    icon: "/icon.png", // Points to public/icon.png
  },

  // Indexing directives for search crawlers
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

  // Canonical link to prevent duplicate content issues
  alternates: {
    canonical: siteUrl,
  },

  // Open Graph (Facebook, LinkedIn, Discord, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Nsikak Imeh-Essien | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building modern, performant web applications with Next.js, TypeScript, and Node.js.",
    siteName: "Nsikak Imeh-Essien Portfolio",
    images: ["/og"],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Nsikak Imeh-Essien | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building modern, performant web applications with Next.js, TypeScript, and Node.js.",
    creator: "@NSK_45",
    images: ["/og"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
