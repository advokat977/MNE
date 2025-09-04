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
      {/* HERO — originalni stil */}
      <Section className="section-tight">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              Trusted Local Counsel for EU Investors in Montenegro
            </h1>
            <p className="mt-5 text-lg text-subtle max-w-prose">
              Board-ready due diligence, transaction execution, and concession strategy — EU standards, Montenegro know-how.
              Reports prepared by a licensed attorney with 20+ years of courtroom and corporate experience.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/#contact" className="inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-3">
                Request Proposal
              </a>
              <a href="/#method" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 hover:bg-white">
                How we work
              </a>
              <a href="/book" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 hover:bg-white">
                Book Intro Call
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES — originalni stil */}
      <Section id="services">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Services</h2>
          <p className="mt-3 max-w-3xl text-subtle">
            Legal due diligence for acquisitions, joint ventures, privatizations, and project investments in Montenegro.
            We also support negotiation strategy and documentation alignment with EU investor expectations.
          </p>
          {/* … (zadrži tvoje postojeće service blokove ako ih imaš u projektu) … */}
        </div>
      </Section>

      {/* METHOD — originalni stil */}
      <Section id="method">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Method</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Primary-source verification (registries, land books, regulator filings).</li>
            <li>Red/Amber/Green risk grading with plain-language rationale.</li>
            <li>Actionable mitigations and SPA/SHAs drafting notes.</li>
            <li>Board-ready summary up front; annexes for depth.</li>
          </ul>
        </div>
      </Section>

      {/* FEES — originalne kartice + dodata 4. “Custom” */}
      <Section id="fees">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Transparent Fees</h2>
          <p className="mt-3 text-center text-subtle">Clear ranges. Serious intent.</p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            {/* NOVO: Custom kartica */}
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

      {/* ABOUT teaser — originalni ton; /about je pun tekst */}
      <Section id="about" className="bg-white border-y border-gray-200">
        <div className="container py-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 text-subtle leading-relaxed max-w-3xl">
            Licensed attorney with 20+ years across courtroom litigation and complex corporate transactions.
            Reports are concise, source-anchored, and decision-oriented.{" "}
            <a href="/about" className="underline">Learn more →</a>
          </p>
        </div>
      </Section>

      {/* CONTACT — originalni form + diskretan link ka /book */}
      <Section id="contact">
        <div className="container max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Contact</h2>
          <p className="mt-3 text-center text-subtle">
            Tell us about the target, the deal context, and your timelines. We’ll get back to you with next steps.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
          <p className="mt-3 text-sm text-subtle text-center">
            Prefer to book a call? <a href="/book" className="underline">Book a 30-min Zoom</a>.
          </p>
        </div>
      </Section>
    </main>
  );
}
