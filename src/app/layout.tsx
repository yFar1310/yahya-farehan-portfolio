import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-placeholder.dev"),
  title: {
    default: "Yahya Farehan | Software Engineering Apprentice",
    template: "%s | Yahya Farehan",
  },
  description:
    "Portfolio of Yahya Farehan, ENSIIE software engineering student and apprentice developer at WebTales, focused on full-stack engineering, cloud systems, and modern web architecture.",
  keywords: [
    "Yahya Farehan",
    "Software Engineering Apprentice",
    "ENSIIE",
    "WebTales",
    "Full-Stack Developer",
    "TypeScript",
    "Astro",
    "React",
    "Vue.js",
    "Cloudflare",
    "GraphQL",
    "Playwright",
    "PostgreSQL",
  ],
  authors: [{ name: "Yahya Farehan" }],
  creator: "Yahya Farehan",
  openGraph: {
    type: "website",
    title: "Yahya Farehan | Software Engineering Apprentice",
    description:
      "Modern portfolio showcasing software engineering projects, professional experience, and full-stack expertise.",
    url: "https://portfolio-placeholder.dev",
    siteName: "Yahya Farehan Portfolio",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yahya Farehan | Software Engineering Apprentice",
    description:
      "Software engineering student at ENSIIE and apprentice developer at WebTales building modern full-stack products.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://portfolio-placeholder.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
