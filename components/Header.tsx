// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
    >
      {children}
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b border-transparent backdrop-blur ${
        isTop ? "bg-white/65 dark:bg-slate-950/55" : "bg-white/85 dark:bg-slate-950/80 border-slate-200/60 dark:border-slate-800/60"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          MNE Consulting
        </Link>
        <nav className="flex items-center gap-5">
          {/* Home anchors rade smisleno i sa drugih ruta */}
          <NavLink href="/#services">Services</NavLink>
          <NavLink href="/#method">Method</NavLink>
          <NavLink href="/#fees">Fees</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/book">Book</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
