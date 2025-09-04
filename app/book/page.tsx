// app/book/page.tsx
"use client";

import { useEffect } from "react";

export const metadata = {
  title: "Book Intro Consult — MNE Consulting",
  description: "Schedule a 30-minute Zoom call with MNE Consulting.",
  openGraph: {
    title: "Book Intro Consult — MNE Consulting",
    description: "Schedule a 30-minute Zoom call with MNE Consulting.",
    url: "https://mneconsulting.org/book",
    type: "website",
  },
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  useEffect(() => {
    // Učitava Cal embed skriptu (auto resize, fokus, theme=system)
    const s = document.createElement("script");
    s.src = "https://cal.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <section className="bg-white border-y border-gray-200">
      <div className="container py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Book an Intro Consult
        </h1>

        <p className="mt-4 text-subtle max-w-prose">
          Choose a time that works for you. Calls are held on Zoom. If you don’t
          see a suitable slot, email{" "}
          <a className="underline" href="mailto:info@mneconsulting.org">
            info@mneconsulting.org
          </a>
          .
        </p>

        {/* 
          data-cal-link: tvoj Cal path
          data-cal-config: theme=system prati light/dark korisnika
        */}
        <div
          className="mt-8 rounded-2xl border border-gray-200 overflow-hidden"
          data-cal-link="mneconsulting/30min"
          data-cal-config='{"layout":"month_view","theme":"system"}'
        >
          <div
            className="cal-container"
            style={{ minHeight: "720px", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
