// components/ContactForm.tsx
"use client";

import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Failed to send message.");
      setState("sent");
      form.reset();
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-live="polite">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none ring-slate-400 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none ring-slate-400 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          placeholder="name@company.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          autoComplete="off"
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none ring-slate-400 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          placeholder="Tell us about the target, deal context, and timelines…"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 focus-ring disabled:opacity-60 dark:bg-white dark:text-slate-900"
        >
          {state === "sending" ? "Sending…" : state === "sent" ? "Sent ✓" : "Send"}
        </button>
        {state === "error" && (
          <p className="text-sm text-red-600">
            {error ?? "We couldn’t send your message. Please try again."}
          </p>
        )}
        {state === "sent" && (
          <p className="text-sm text-green-700">Thanks — we’ll get back to you shortly.</p>
        )}
      </div>
    </form>
  );
}
