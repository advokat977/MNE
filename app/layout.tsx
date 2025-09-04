import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MNE Consulting — Trusted Local Counsel for EU Investors",
  description:
    "Board-ready legal due diligence, transaction execution, and concession strategy in Montenegro. Reports prepared by a licensed attorney with 20+ years of courtroom and corporate experience.",
  metadataBase: new URL("https://mneconsulting.org"),
  openGraph: {
    title: "MNE Consulting — Trusted Local Counsel for EU Investors",
    description:
      "Board-ready legal due diligence, transaction execution, and concession strategy in Montenegro.",
    url: "https://mneconsulting.org",
    siteName: "MNE Consulting",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MNE Consulting" }],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-white text-gray-900`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
