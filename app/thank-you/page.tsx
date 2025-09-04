export const metadata = {
  title: "Thank you — MNE Consulting",
  description:
    "Your message has been sent. We usually reply within 1–2 business days.",
  alternates: { canonical: "https://mneconsulting.org/thank-you" },
};

export default function ThankYouPage() {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Thank you.</h1>
        <p className="mt-4 max-w-prose text-subtle">
          Your message has been sent. We usually reply within 1–2 business days. If you don’t receive a reply,
          please reach out via our{" "}
          <a className="underline hover:no-underline" href="/#contact">
            contact form
          </a>
          .
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {/* Svetla dugmad, ujednačen stil */}
          <a
            href="/"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-white hover:shadow transition"
          >
            Back to Home
          </a>
          <a
            href="/book"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-white hover:shadow transition"
          >
            Book Zoom Call
          </a>
        </div>

        <p className="mt-6 text-xs text-subtle">Tip: You can close this tab if it opened in a new window.</p>
      </div>
    </section>
  );
}
