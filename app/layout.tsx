import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./../styles/globals.css"; // NOTE: path to styles/globals.css

import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mneconsulting.org"),
  title: "MNE Consulting — Trusted Local Counsel for EU Investors in Montenegro",
  description:
    "Board-ready due diligence, transaction execution, and concession strategy — EU standards, Montenegro know-how.",
  openGraph: {
    title: "MNE Consulting — Trusted Local Counsel for EU Investors",
    description:
      "Board-ready due diligence, transaction execution, and concession strategy — EU standards, Montenegro know-how.",
    url: "https://mneconsulting.org",
    siteName: "MNE Consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MNE Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MNE Consulting — Trusted Local Counsel for EU Investors",
    description:
      "Board-ready due diligence, transaction execution, and concession strategy — EU standards, Montenegro know-how.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.png",
  },
  alternates: {
    canonical: "https://mneconsulting.org",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Minimal JSON-LD (organization)
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "MNE Consulting",
    url: "https://mneconsulting.org",
    logo: "https://mneconsulting.org/favicon.png",
    sameAs: [],
    areaServed: "ME",
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded">
          Skip to content
        </a>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <Header />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />

        {/* Vercel telemetry */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
