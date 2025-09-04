// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://mneconsulting.org"),
  title: {
    default: "MNE Consulting — Due Diligence in Montenegro for EU Investors",
    template: "%s — MNE Consulting",
  },
  description:
    "Source-anchored, board-ready due diligence in Montenegro for EU investors. Clear risk flags, practical recommendations, and deal-focused execution.",
  openGraph: {
    title: "MNE Consulting — Due Diligence in Montenegro",
    description:
      "Source-anchored, board-ready due diligence in Montenegro for EU investors.",
    url: "https://mneconsulting.org",
    siteName: "MNE Consulting",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://mneconsulting.org",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  // Sistemskog izgleda: bijela u light, crna u dark modu (Apple-like minimalizam)
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "MNE Consulting",
    url: "https://mneconsulting.org",
    logo: "https://mneconsulting.org/logo.png",
    image: "https://mneconsulting.org/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ME",
      addressLocality: "Podgorica",
    },
    // Namjerno nema "email" polja (anti-spam). Kontakt ide preko forme na sajtu.
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // @ts-expect-error - JSON string is valid
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        {/* Globalni mobilni UX dodatci */}
        <BackToTop />
        <MobileStickyBar />
      </body>
    </html>
  );
}
