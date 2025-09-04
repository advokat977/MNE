// components/MobileStickyBar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileStickyBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onFocusIn = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        setKeyboardOpen(true);
      }
    };
    const onFocusOut = () => setKeyboardOpen(false);
    window.addEventListener("focusin", onFocusIn);
    window.addEventListener("focusout", onFocusOut);
    return () => {
      window.removeEventListener("focusin", onFocusIn);
      window.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  if (!visible || keyboardOpen) return null;
  if (pathname === "/book") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 block border-t border-slate-200/60 bg-white/95 p-3 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/90 md:hidden">
      <div className="mx-auto flex max-w-6xl gap-3 px-1">
        <Link
          href="/#contact"
          className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white hover:opacity-90 focus-ring dark:bg-white dark:text-slate-900"
        >
          Contact
        </Link>
        <Link
          href="/book"
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50 focus-ring dark:border-slate-700 dark:text-white dark:hover:bg-slate-900/40"
        >
          Book
        </Link>
      </div>
    </div>
  );
}
