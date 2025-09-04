"use client";

import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://cal.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <div
      className="mt-8 rounded-2xl border border-gray-200 overflow-hidden"
      data-cal-link="mneconsulting/30min"
      data-cal-config='{"layout":"month_view","theme":"system"}'
    >
      <div className="cal-container" style={{ minHeight: "720px", width: "100%" }} />
    </div>
  );
}
