"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function Header() {
  const pathname = usePathname();

  // Da hash linkovi rade i sa podstranica (npr. /privacy, /book, /terms…)
  const home = "/";

  const nav = useMemo(
    () => [
      { label: "Services", href: `${home}#services` },
      { label: "Method", href: `${home}#method` },
      { label: "Fees", href: `${home}#fees` },
      { label: "About", href: `${home}#about` },
      { label: "Contact", href: `${home}#contact` },
      { label: "Book", href: "/book" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            MNE Consulting
          </Link>

          <nav className="hidden sm:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-700 hover:text-gray-900"
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA – svi CTA dugmići svijetli (u skladu s tvojim zahtjevom) */}
            <Link
              href="/book"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-white hover:shadow transition"
              prefetch={false}
            >
              Book Zoom Call
            </Link>
          </nav>

          {/* Compact meni za male ekrane: samo CTA da ostane vidljiv */}
          <div className="sm:hidden">
            <Link
              href="/book"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-white hover:shadow transition"
              prefetch={false}
            >
              Book Zoom Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
