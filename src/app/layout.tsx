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
    default: "Yahya Farehan | Project Manager Apprentice",
    template: "%s | Yahya Farehan",
  },
  description:
    "Portfolio of Yahya Farehan, ENSIIE engineering student and apprentice Project Manager at WebTales, leading digital projects for client UCPA with a strong technical background.",
  keywords: [
    "Yahya Farehan",
    "Project Manager",
    "Project Manager Apprentice",
    "Technical Project Manager",
    "ENSIIE",
    "WebTales",
    "UCPA",
    "Paris-Saclay",
    "Project Management",
    "Stakeholder Management",
    "Delivery",
  ],
  authors: [{ name: "Yahya Farehan" }],
  creator: "Yahya Farehan",
  openGraph: {
    type: "website",
    title: "Yahya Farehan | Project Manager Apprentice",
    description:
      "Portfolio showcasing digital project leadership, multi-project delivery for UCPA, and international team management experience.",
    url: "https://portfolio-placeholder.dev",
    siteName: "Yahya Farehan Portfolio",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yahya Farehan | Project Manager Apprentice",
    description:
      "Engineering student at ENSIIE and apprentice Project Manager at WebTales, leading digital projects for client UCPA.",
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
