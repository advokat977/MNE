"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  const items = [
    { href: "/#services", label: "Services" },
    { href: "/#method", label: "Method" },
    { href: "/#fees", label: "Fees" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
    { href: "/book", label: "Book" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-site/80 backdrop-blur border-b border-gray-200">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          MNE Consulting
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="hover:text-ink">
              {it.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-accent text-white px-4 py-2"
          >
            Book Intro Call
          </Link>
        </nav>

        <button
          className="md:hidden border rounded-xl px-3 py-2"
          aria-label="Menu"
          onClick={toggle}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-site">
          <div className="container py-3 space-y-2">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                onClick={close}
                className="block py-2"
              >
                {it.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={close}
              className="inline-flex items-center justify-center rounded-full bg-accent text-white px-4 py-2"
            >
              Book Intro Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
