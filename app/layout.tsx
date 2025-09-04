// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileBar from "../components/MobileBar";
import BackToTop from "../components/BackToTop";

export const metadata: Metadata = {
  title: "MNE Consulting — Trusted Local Counsel for EU Investors",
  description:
    "Board-ready legal due diligence, transaction execution, and concession strategy for EU investors in Montenegro.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  openGraph: {
    title: "MNE Consulting — Montenegro Due Diligence",
    description:
      "Premium due diligence and strategic counsel for EU investors in Montenegro.",
    url: "https://mneconsulting.org/",
    siteName: "MNE Consulting",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MNE Consulting" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MNE Consulting — Montenegro Due Diligence",
    description:
      "Premium due diligence and strategic counsel for EU investors in Montenegro.",
    images: ["/og-image.jpg"],
  },
  // themeColor preko <meta> ručno (vidi ispod) zbog light/dark varijanti
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema.org bez emaila
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "MNE Consulting",
    "url": "https://mneconsulting.org/",
    "areaServed": "ME",
    "priceRange": "€7.500–€50.000+",
    "description":
      "Boutique legal practice for EU investors entering Montenegro. Premium due diligence, transaction execution, and concession strategy.",
    "founder": {
      "@type": "Person",
      "name": "Dejan Radinović",
      "jobTitle": "Attorney at Law"
    },
  };

  return (
    <html lang="en">
      <head>
        {/* viewport sa safe-area podrškom */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* theme-color za light/dark (poboljaš status bar na mobilu) */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#0f172a" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0b0d10" />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased bg-bg text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-3 py-2 rounded"
        >
          Skip to content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />

        {/* Mobile sticky bar (Contact / Book) */}
        <MobileBar />
        {/* Back to top dugme */}
        <BackToTop />
      </body>
    </html>
  );
}
