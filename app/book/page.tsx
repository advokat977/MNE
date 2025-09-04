export const metadata = {
  title: "Book a Zoom Call — MNE Consulting",
  description:
    "Schedule a 30-minute Zoom consultation with MNE Consulting. If you don’t see a suitable slot, contact us via the form.",
  alternates: {
    canonical: "https://mneconsulting.org/book",
  },
  openGraph: {
    title: "Book a Zoom Call — MNE Consulting",
    description:
      "Schedule a 30-minute Zoom consultation with MNE Consulting. If you don’t see a suitable slot, contact us via the form.",
    url: "https://mneconsulting.org/book",
    siteName: "MNE Consulting",
  },
};

export default function BookPage() {
  // ⬇️ PROMIJENI LINK ako je drugačiji tvoj Cal.com slug.
  // Ako već imaš ispravan iframe u prethodnoj verziji, slobodno samo zamijeni src ispod istim tim linkom.
  const calSrc =
    "https://cal.com/embed/mneconsulting/30min?primaryColor=0f172a&hide_event_type_details=0&hide_gdpr_banner=1";

  return (
    <section className="bg-white border-y border-gray-200">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Book a Zoom Call
        </h1>

        <p className="mt-4 max-w-3xl text-subtle">
          Choose a time that works for you. Calls are held on Zoom. If you don’t
          see a suitable slot,{" "}
          <a href="/#contact" className="underline hover:no-underline">
            contact us here
          </a>
          .
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50">
          <div className="rounded-2xl overflow-hidden">
            <iframe
              title="Cal.com scheduling"
              src={calSrc}
              width="100%"
              height="850"
              style={{ border: 0 }}
              allow="camera; microphone; autoplay; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
