"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 backdrop-blur bg-[rgba(247,245,242,0.7)]">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">MNE Consulting</Link>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center gap-2 px-3 py-2 border rounded text-sm"
          aria-expanded={open}
          aria-controls="mainnav"
        >
          <span>Menu</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        <nav id="mainnav" className="hidden md:flex items-center gap-8 text-[15px]">
          <a href="#services" className="hover:opacity-70">Services</a>
          <a href="#method" className="hover:opacity-70">Method</a>
          <a href="#fees" className="hover:opacity-70">Fees</a>
          <a href="#about" className="hover:opacity-70">About</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>
          <a href="#contact" className="ml-2 inline-flex items-center justify-center rounded-full bg-accent text-white px-4 py-2 hover:opacity-90">Request Proposal</a>
        </nav>
      </div>

      <div className={`${open ? "" : "hidden"} md:hidden border-t border-gray-200/70`}>
        <div className="px-5 py-3 space-y-3">
          <a href="#services" className="block" onClick={() => setOpen(false)}>Services</a>
          <a href="#method" className="block" onClick={() => setOpen(false)}>Method</a>
          <a href="#fees" className="block" onClick={() => setOpen(false)}>Fees</a>
          <a href="#about" className="block" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" className="block" onClick={() => setOpen(false)}>Contact</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-accent text-white px-4 py-2" onClick={() => setOpen(false)}>Request Proposal</a>
        </div>
      </div>
    </header>
  );
}
