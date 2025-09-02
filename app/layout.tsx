import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mneconsulting.org"),
  title: "MNE Consulting — Trusted Local Counsel for EU Investors in Montenegro",
  description:
    "Board-ready due diligence, transaction execution, and concession strategy — EU standards, Montenegro know-how.",
  alternates: { canonical: "/" },
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-3 py-2 rounded"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
