// app/book/page.tsx

export const metadata = {
  title: "Book a Zoom Call — MNE Consulting",
  description:
    "Choose a time that works for you. Calls are held on Zoom. If you don’t see a suitable slot, contact us.",
  alternates: { canonical: "https://mneconsulting.org/book" },
  openGraph: {
    title: "Book a Zoom Call — MNE Consulting",
    description:
      "Choose a time that works for you. Calls are held on Zoom. If you don’t see a suitable slot, contact us.",
    url: "https://mneconsulting.org/book",
    siteName: "MNE Consulting",
  },
};

export default function BookPage() {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Book a Zoom Call</h1>
        <p className="mt-4 max-w-prose text-subtle">
          Choose a time that works for you. Calls are held on Zoom. If you don’t see a suitable slot,{" "}
          <a className="underline hover:no-underline" href="/#contact">contact us</a>.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50/50 p-2 sm:p-4">
          <div className="rounded-xl bg-white p-2 sm:p-4">
            <iframe
              title="Book a Zoom Call — Cal.com"
              src="https://cal.com/mneconsulting/30min?embed=1"
              width="100%"
              height="800"
              style={{ border: "0", minHeight: 600 }}
              referrerPolicy="no-referrer-when-downgrade"
              allow="clipboard-write; microphone; camera"
            />
          </div>
        </div>

        <script async src="https://cal.com/embed.js" />
      </div>
    </section>
  );
}
