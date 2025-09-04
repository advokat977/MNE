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

        {/* Mobile toggle */}
        <button
          onClick={toggle}
          className="md:hidden inline-flex items-center gap-2 px-3 py-2 border rounded text-sm"
          aria-expanded={open}
          aria-controls="mainnav"
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
          <Link href="/#about" className="hover:opacity-70">About</Link>
          <Link href="/#contact" className="hover:opacity-70">Contact</Link>
          <Link
            href="/#contact"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-accent text-white px-4 py-2 hover:opacity-90"
          >
            Request Proposal
          </Link>
        </nav>
      </div>

      {/* Mobile panel */}
      <div className={`${open ? "" : "hidden"} md:hidden border-t border-gray-200/70`}>
        <div className="px-5 py-3 space-y-3">
          <Link href="/#services" className="block" onClick={close}>Services</Link>
          <Link href="/#method" className="block" onClick={close}>Method</Link>
          <Link href="/#fees" className="block" onClick={close}>Fees</Link>
          <Link href="/#about" className="block" onClick={close}>About</Link>
          <Link href="/#contact" className="block" onClick={close}>Contact</Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent text-white px-4 py-2"
            onClick={close}
          >
            Request Proposal
          </Link>
        </div>
      </div>
    </header>
  );
}
