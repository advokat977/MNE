"use client";

import { useCallback, useMemo, useRef, useState } from "react";

// Fallback endpoint (ostaje aktivan kad je flag isključen)
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/6ac35b30f85cde7d7f870d157d8ea4c9";

// Public feature-flag: build-time read (mora početi sa NEXT_PUBLIC_)
const USE_RESEND = process.env.NEXT_PUBLIC_USE_RESEND === "1";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string>("");

  const isSending = status === "sending";

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      if (!USE_RESEND) {
        // Bez JS submit-a; FormSubmit radi redirect (_next je postavljen kroz hidden polje).
        return;
      }

      e.preventDefault();
      setStatus("sending");
      setError("");

      try {
        const form = e.currentTarget;
        const data = new FormData(form);

        // Honeypot: ako bot popuni _honey, tretiraj kao uspjeh i odmah redirect
        if ((data.get("_honey") as string) || "") {
          setStatus("ok");
          window.location.href = "/thank-you";
          return;
        }

        const payload = {
          name: (data.get("name") as string)?.trim() || "",
          email: (data.get("email") as string)?.trim() || "",
          company: (data.get("company") as string)?.trim() || "",
          service: (data.get("service") as string)?.trim() || "",
          message: (data.get("message") as string)?.trim() || "",
        };

        // Minimalna validacija
        if (!payload.name || !payload.email || !payload.message || !payload.service) {
          setStatus("error");
          setError("Please fill in all required fields.");
          return;
        }

        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json?.ok) {
          throw new Error(json?.error || "Send failed");
        }

        setStatus("ok");
        window.location.href = "/thank-you";
      } catch (err: any) {
        setStatus("error");
        setError(err?.message || "Something went wrong. Please try again.");
      }
    },
    []
  );

  // Ako je flag isključen: koristimo FormSubmit endpoint i POST bez JS-a
  const formProps = useMemo(() => {
    if (USE_RESEND) {
      return {
        action: undefined as string | undefined,
        method: undefined as "POST" | undefined,
      };
    }
    return {
      action: FORMSUBMIT_ENDPOINT,
      method: "POST" as const,
    };
  }, []);

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      {...formProps}
      aria-describedby="formStatus"
      className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gray-200 bg-white p-6"
    >
      {/* Honeypot + FormSubmit skrivena podešavanja za fallback */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      {!USE_RESEND && (
        <>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New inquiry from mneconsulting.org" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://mneconsulting.org/thank-you" />
        </>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            disabled={isSending}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            disabled={isSending}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium">
            Company
          </label>
          <input
            id="company"
            name="company"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            disabled={isSending}
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            disabled={isSending}
          >
            <option value="">Select a service</option>
            <option>Due Diligence</option>
            <option>Transaction Execution & Closings</option>
            <option>Concessions & PPP Strategy</option>
            <option>Cross-Border Disputes</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            disabled={isSending}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-white disabled:opacity-70"
        >
          {isSending ? "Sending…" : "Send Inquiry"}
        </button>

        {/* Jedina verzija CTA-a za live razgovor (u okviru kartice, desno poravnata na većim ekranima) */}
        <p className="text-sm text-subtle sm:text-right sm:ml-auto">
          Prefer to speak live?{" "}
          <a className="underline hover:no-underline" href="/book">
            Book a 30-min Zoom.
          </a>
        </p>
      </div>

      <p id="formStatus" className="sr-only" aria-live="polite">
        {status === "sending" ? "Sending" : status === "ok" ? "Sent" : status === "error" ? error : ""}
      </p>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
