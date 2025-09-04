// app/book/page.tsx
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

const CAL_URL = "https://cal.com/mneconsulting/30min?theme=system";

export default function BookPage() {
  return (
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

      <div className="mt-8 rounded-2xl border border-gray-200 overflow-hidden">
        <iframe
          src={CAL_URL}
          title="Book a call"
          loading="lazy"
          style={{ width: "100%", height: "900px", border: 0 }}
          // dozvole za kameru/mikrofon ako ih Cal traži u embedu
          allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
        />
      </div>
    </div>
  );
}
