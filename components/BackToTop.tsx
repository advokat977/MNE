// components/BackToTop.tsx
"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 rounded-full px-4 py-3 text-sm font-medium shadow-sm border border-[var(--ink)] bg-[var(--bg)]/90 backdrop-blur hover:opacity-90"
    >
      ↑ Top
    </button>
  );
}
