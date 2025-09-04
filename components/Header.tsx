"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function Header() {
  const pathname = usePathname();

  // Ako nismo na /, linkovi vode na apsolutne hash sekcije (/#services itd.)
  const base = useMemo(() => (pathname === "/" ? "" : "/"), [pathname]);

  const nav = [
    { href: `${base}#services`, label: "Services" },
    { href: `${base}#method`, label: "Method" },
    { href: `${base}#fees`, label: "Fees" },
    { href: `${base}#about`, label: "About" },
    { href: `${base}#contact`, label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          MNE Consulting
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="hover:text-gray-900">
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/book" className="btn-accent no-underline text-white">
            Book Intro Call
          </Link>
        </div>
      </div>
    </header>
  );
}
