import type { Metadata } from "next";
import { Syne, Urbanist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Urbanist({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteTitle = "Kontinue AI — One workspace for every AI model";
const siteDescription =
  "Import chats from ChatGPT, Claude, Gemini, Perplexity, Mistral, and more. Switch models instantly, compare answers, and pay for one plan.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kontinueai.com"),
  title: {
    default: siteTitle,
    template: "%s — Kontinue AI",
  },
  description: siteDescription,
  applicationName: "Kontinue AI",
  authors: [{ name: "Kontinue AI" }],
  keywords: [
    "Kontinue AI",
    "kontinueai",
    "AI chat workspace",
    "multi-model AI",
    "AI model switcher",
    "AI chat import",
    "ChatGPT import",
    "Claude",
    "Gemini",
    "Perplexity",
    "Mistral",
    "T3 Chat",
    "AI subscriptions",
    "AI comparison",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Kontinue AI",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Kontinue AI — One workspace for every AI model",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${body.variable} ${display.variable} ${mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
