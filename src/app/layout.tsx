import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const defaultSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://viet20016602.github.io/SolComp";

export const metadata: Metadata = {
  metadataBase: new URL(defaultSiteUrl),
  title: "Synaptic Swarm Protocol (SYNS)",
  description:
    "Neuromorphic swarm intelligence protocol MVP website, docs, and public demo repository built with Next.js and TypeScript.",
  keywords: [
    "Synaptic Swarm Protocol",
    "SYNS",
    "neuromorphic swarm intelligence",
    "multi-agent protocol",
    "protocol demo",
    "Next.js MVP",
  ],
  openGraph: {
    title: "Synaptic Swarm Protocol (SYNS)",
    description:
      "A dark, protocol-native MVP experience for a neuromorphic swarm intelligence stack.",
    url: defaultSiteUrl,
    siteName: "Synaptic Swarm Protocol",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Synaptic Swarm Protocol cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synaptic Swarm Protocol (SYNS)",
    description: "Neuromorphic swarm intelligence protocol MVP website and demo repository.",
    images: ["/og-cover.svg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${plexMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
