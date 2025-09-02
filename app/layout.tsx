import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "MNE Consulting — Trusted Local Counsel for EU Investors",
  description:
    "Premium due diligence, transaction execution, and concession strategy for EU investors in Montenegro.",
  metadataBase: new URL("https://mneconsulting.org"),
  alternates: { canonical: "https://mneconsulting.org" },
  openGraph: {
    title: "MNE Consulting — Trusted Local Counsel",
    description:
      "Premium due diligence, transaction execution, and concession strategy for EU investors in Montenegro.",
    url: "https://mneconsulting.org",
    siteName: "MNE Consulting",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "MNE Consulting — Trusted Local Counsel for EU Investors" }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MNE Consulting — Trusted Local Counsel",
    description:
      "Premium due diligence, transaction execution, and concession strategy for EU investors in Montenegro.",
    images: ["/og-image.png"]
  },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "MNE Consulting",
    "url": "https://mneconsulting.org",
    "areaServed": "ME",
    "logo": "https://mneconsulting.org/favicon.png",
    "image": "https://mneconsulting.org/og-image.png",
    "email": "info@mneconsulting.org",
    "priceRange": "€7.5k–€50k+",
    "description":
      "Boutique legal practice for EU investors entering Montenegro. Premium due diligence, transaction execution, and concession strategy.",
    "founder": {
      "@type": "Person",
      "name": "Dejan Radinović",
      "jobTitle": "Attorney at Law"
    }
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-3 py-2 rounded"
        >
          Skip to content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <Header />
        <main id="main">{children}</main>
        <Footer />

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
