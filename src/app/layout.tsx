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

const defaultSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solcomp.xyz/";

export const metadata: Metadata = {
  metadataBase: new URL(defaultSiteUrl),
  title: "SolComp | SOLC",
  description:
    "SolComp is a SOLC project narrative centered on AI inference, public branding, and the message Powering the Age of Inference.",
  keywords: [
    "SolComp",
    "SOLC",
    "Powering the Age of Inference",
    "Solana AI",
    "AI inference",
    "crypto project website",
  ],
  openGraph: {
    title: "SolComp | SOLC",
    description: "Powering the Age of Inference.",
    url: defaultSiteUrl,
    siteName: "SolComp",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "SolComp cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolComp | SOLC",
    description: "Powering the Age of Inference.",
    images: ["/og-cover.svg"],
  },
  icons: {
    icon: "/brand/logo.png",
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
