import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you — MNE Consulting",
  description: "Your message has been sent.",
  robots: { index: false, follow: false }, // ne indeksirati "thank you" stranicu
};

export default function ThankYouPage() {
  return (
    <div className="container py-16">
      <div className="max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight">Thank you.</h1>
        <p className="mt-4 text-subtle">
          Your message has been sent. We usually reply within 1–2 business days.
          If it’s urgent, email us directly at{" "}
          <a className="underline" href="mailto:info@mneconsulting.org">info@mneconsulting.org</a>.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-3"
          >
            Back to Home
          </Link>
        </div>

        <p className="mt-6 text-xs text-subtle">
          Tip: You can close this tab if it opened in a new window.
        </p>
      </div>
    </div>
  );
}
