"use client";

import Link from "next/link";
import { useState, useCallback } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(v => !v), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 backdrop-blur bg-[rgba(247,245,242,0.7)]">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          MNE Consulting
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center gap-2 text-sm"
          aria-expanded={open}
          aria-controls="mainnav"
          onClick={toggle}
        >
          <span>Menu</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        {/* Desktop nav */}
        <nav id="mainnav" className="hidden md:flex items-center gap-8 text-[15px]">
          <Link href="/#services" className="hover:opacity-70">Services</Link>
          <Link href="/#method" className="hover:opacity-70">Method</Link>
          <Link href="/#fees" className="hover:opacity-70">Fees</Link>
          <Link href="/about" className="hover:opacity-70">About</Link>
          <Link href="/book" className="hover:opacity-70">Book</Link>
          <Link href="/#contact" className="hover:opacity-70">Contact</Link>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-[var(--bg)]">
          <div className="container py-3 flex flex-col gap-3 text-[15px]">
            <Link onClick={close} href="/#services">Services</Link>
            <Link onClick={close} href="/#method">Method</Link>
            <Link onClick={close} href="/#fees">Fees</Link>
            <Link onClick={close} href="/about">About</Link>
            <Link onClick={close} href="/book">Book</Link>
            <Link onClick={close} href="/#contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
