"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      className={`back-to-top ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      ↑
    </button>
  );
}
