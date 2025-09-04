// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import MobileStickyBar from "../components/MobileStickyBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "MNE Consulting — Trusted Local Counsel for EU Investors",
  description:
    "Premium due diligence, transaction execution, and concession strategy for EU investors in Montenegro.",
  metadataBase: new URL("https://mneconsulting.org"),
  alternates: { canonical: "https://mneconsulting.org" },
  openGraph: {
    title: "MNE Consulting — Trusted Local Counsel for EU Investors",
    description:
      "Board-ready due diligence, transaction execution, and concession strategy — EU standards, Montenegro know-how.",
    type: "website",
    url: "https://mneconsulting.org/",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema.org JSON-LD — bez emaila (anti-spam)
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "MNE Consulting",
    url: "https://mneconsulting.org",
    areaServed: ["ME", "EU"],
    priceRange: "€7.5k–€50k+",
    description:
      "Boutique legal practice for EU investors entering Montenegro — due diligence, transaction execution, and concession strategy.",
    image: "https://mneconsulting.org/og-image.png",
    logo: "https://mneconsulting.org/favicon.png",
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[var(--bg)] text-[var(--ink)]`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {/* UX dodatci u starom stilu (ne diraju tipografiju/razmjere) */}
        <BackToTop />
        <MobileStickyBar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
