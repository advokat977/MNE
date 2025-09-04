// components/MobileStickyBar.tsx
"use client";

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
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT")) {
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
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--ink)]/15 bg-[var(--bg)]/95 backdrop-blur md:hidden">
      <div className="container py-3 flex items-center gap-8">
        <a
          href="/#contact"
          className="flex-1 inline-flex items-center justify-center rounded-full bg-accent text-white px-5 py-3"
        >
          Contact
        </a>
        <a
          href="/book"
          className="flex-1 inline-flex items-center justify-center rounded-full border border-[var(--ink)] px-5 py-3"
        >
          Book
        </a>
      </div>
    </div>
  );
}
