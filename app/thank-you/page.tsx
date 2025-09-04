import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you — MNE Consulting",
  description:
    "Your message has been sent. We usually reply within 1–2 business days.",
  robots: { index: false, follow: false }, // thank-you ne indeksiramo
};

export default function ThankYouPage() {
  return (
    <section className="section-tight">
      <div className="container">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Thank you.
        </h1>

        <p className="mt-4 max-w-prose text-subtle">
          Your message has been sent. We usually reply within <strong>1–2 business days</strong>.
        </p>

        <div className="mt-6 flex gap-3">
          <Link href="/" className="btn-accent">
            Back to Home
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 hover:bg-white"
          >
            Book Intro Call
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Tip: You can close this tab if it opened in a new window.
        </p>
      </div>
    </section>
  );
}
