// app/book/page.tsx
import CalEmbed from "./CalEmbed";

export const metadata = {
  title: "Book Intro Consult — MNE Consulting",
  description: "Schedule a 30-minute Zoom call with MNE Consulting.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
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
        <CalEmbed />
      </div>
    </section>
  );
}
