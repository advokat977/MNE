import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  // Bitno: canonical će biti apsolutni URL na glavnom domenu
  metadataBase: new URL("https://mneconsulting.org"),
  title: "MNE Consulting — Trusted Local Counsel for EU Investors in Montenegro",
  description:
    "Board-ready due diligence, transaction execution, and concession strategy — EU standards, Montenegro know-how.",
  alternates: {
    canonical: "https://mneconsulting.org/",
  },
  openGraph: {
    type: "website",
    url: "https://mneconsulting.org/",
    title: "MNE Consulting — Montenegro Due Diligence",
    description:
      "Premium due diligence and strategic counsel for EU investors in Montenegro.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MNE Consulting — Trusted Local Counsel for EU Investors in Montenegro",
      },
    ],
    siteName: "MNE Consulting",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MNE Consulting — Montenegro Due Diligence",
    description:
      "Premium due diligence and strategic counsel for EU investors in Montenegro.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
  category: "professional services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD (Schema.org: LegalService)
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "MNE Consulting",
    "url": "https://mneconsulting.org/",
    "areaServed": ["ME", "EU"],
    "email": "info@mneconsulting.org",
    "priceRange": "€7.5k–€50k+",
    "description":
      "Boutique legal practice for EU investors entering Montenegro. Premium due diligence, transaction execution, and concession strategy.",
    "image": "https://mneconsulting.org/og-image.png",
    "logo": "https://mneconsulting.org/favicon.png"
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

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
