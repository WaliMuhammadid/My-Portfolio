import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Marquee from "@/components/Marquee";
import Navigation from "@/components/Navigation";
import MouseTrail from "@/components/MouseTrail";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wali-muhammad.netlify.app'),
  title: "Wali Muhammad — AI-Assisted Developer & Vibe Coder",
  description: "AI-Assisted Developer based in Karachi. Specializing in rapid prototyping, fullstack web products, and modern AI workflows.",
  keywords: ["AI Developer", "Web Developer", "React", "Next.js", "Vibe Coder", "Karachi", "Pakistan", "Wali Muhammad", "Fullstack Engineer", "Agentic Tools"],
  authors: [{ name: "Wali Muhammad" }],
  creator: "Wali Muhammad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wali-muhammad.netlify.app",
    title: "Wali Muhammad — AI-Assisted Developer",
    description: "AI-Assisted Developer for rapid prototyping, web products, and modern workflows.",
    siteName: "Wali Muhammad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wali Muhammad — AI-Assisted Developer",
    description: "AI-Assisted Developer for rapid prototyping, web products, and modern workflows.",
    creator: "@walimuhammad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} scanlines`}>
        <MouseTrail />
        <Marquee />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
