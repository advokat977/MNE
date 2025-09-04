// app/page.tsx
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "MNE Consulting — Trusted Local Counsel for EU Investors in Montenegro",
  description:
    "Board-ready due diligence, transaction execution, and concession strategy — EU standards, Montenegro know-how.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MNE Consulting — Trusted Local Counsel for EU Investors in Montenegro",
    description:
      "Board-ready due diligence, transaction execution, and concession strategy — EU standards, Montenegro know-how.",
    type: "website",
    url: "https://mneconsulting.org/",
  },
};

export default function HomePage() {
  return (
    <main>
      {/* HERO (stari stil) */}
      <Section id="hero" className="section-tight">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Trusted local counsel for EU investors in Montenegro.
            </h1>
            <p className="mt-5 text-lg text-subtle">
              Board-ready due diligence, transaction execution, and concession
              strategy — EU standards, Montenegro know-how. Reports prepared by a
              licensed attorney with 20+ years of courtroom and corporate
              experience.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {/* Apsolutni hash linkovi da rade sa svih ruta */}
              <a
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-3"
                aria-label="Book a 30-min Zoom call"
              >
                Book a 30-min call
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-[var(--ink)] px-6 py-3"
                aria-label="Contact form"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES (stari stil) */}
      <Section id="services">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Services</h2>
          <p className="mt-3 max-w-3xl text-subtle">
            Legal due diligence for acquisitions, joint ventures, privatizations, and project investments in Montenegro.
            We also support negotiation strategy and documentation alignment with EU investor expectations.
          </p>
        </div>
      </Section>

      {/* METHOD (stari stil) */}
      <Section id="method">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Method</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[17px]">
            <li>Primary-source verification (registries, land books, regulator filings).</li>
            <li>Red/Amber/Green risk grading with plain-language rationale.</li>
            <li>Actionable mitigations and SPA/SHAs drafting notes.</li>
            <li>Board-ready summary up front; annexes for depth.</li>
          </ul>
        </div>
      </Section>

      {/* FEES — prošireno na 4 kartice, zadržan stari izgled kartica */}
      <Section id="fees">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">
            Transparent Fees
          </h2>
          <p className="mt-3 text-center text-subtle">Clear ranges. Serious intent.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold">Basic Due Diligence</h3>
              <p className="mt-2 text-2xl font-semibold">Starting from €7,500</p>
              <p className="mt-2 text-sm text-subtle">
                Focused high-level review of key legal domains and red flags for smaller tickets.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Standard Due Diligence</h3>
              <p className="mt-2 text-2xl font-semibold">Starting from €15,000</p>
              <p className="mt-2 text-sm text-subtle">
                Comprehensive corporate, regulatory, and property law review for mid-sized transactions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold">Premium Due Diligence</h3>
              <p className="mt-2 text-2xl font-semibold">Starting from €30,000</p>
              <p className="mt-2 text-sm text-subtle">
                Complex, high-value deals, deep research, schedules, and on-site coordination.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold">Custom</h3>
              <p className="mt-2 text-2xl font-semibold">
                <a href="/#contact" className="underline">Price: upon request →</a>
              </p>
              <p className="mt-2 text-sm text-subtle">
                Tailored scope, specialist inputs, investor reporting format, on-site sessions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ABOUT teaser (ostaje kao i ranije, ali sada postoji i /about) */}
      <Section id="about" className="bg-white">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h2>
          <p className="mt-3 max-w-3xl text-subtle">
            Led by Dejan Radinović. Two decades across privatizations, high-stakes due diligence,
            complex M&A, and international arbitration.{" "}
            <a href="/about" className="underline">Learn more →</a>
          </p>
        </div>
      </Section>

      {/* CONTACT (stari stil + ostaje Resend backend) */}
      <Section id="contact">
        <div className="container max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Contact</h2>
          <p className="mt-3 text-center text-subtle">
            Tell us about the target, the deal context, and your timelines. We’ll get back to you with next steps.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>

          {/* Diskretan link ka /book ispod forme */}
          <p className="mt-3 text-sm text-subtle text-center">
            Prefer to book a call?{" "}
            <a href="/book" className="underline">Book a 30-min Zoom</a>.
          </p>
        </div>
      </Section>
    </main>
  );
}
