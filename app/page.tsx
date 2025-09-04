// app/page.tsx
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "MNE Consulting — Trusted Local Counsel for EU Investors in Montenegro",
  description:
    "Board-ready due diligence, transaction execution, and concession strategy — EU standards, Montenegro know-how. Reports prepared by a licensed attorney with 20+ years of courtroom and corporate experience.",
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
    <>
      {/* Hero */}
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
              {/* apsolutni hash linkovi da rade sa svih ruta */}
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-3"
                aria-label="Request a project proposal"
              >
                Request Proposal
              </a>
              <a
                href="/#method"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 hover:bg-white"
                aria-label="See how we work"
              >
                How we work
              </a>
              {/* NEW: diskretni CTA ka /book */}
              <a
                href="/book"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 hover:bg-white"
                aria-label="Book a 30-minute Zoom call"
              >
                Book Intro Call
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-subtle">
              <li>Montenegrin Bar (since 2004)</li>
              <li>World Triathlon Tribunal</li>
              <li>20+ years litigation &amp; transactions</li>
              <li>GDPR-compliant</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Services</h2>
          <p className="mt-3 text-center text-subtle">Focused. High-impact. Built for investment decisions.</p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Due Diligence",
                text:
                  "Flagship service: red-flag and full-scope legal DD with source-backed findings, warranties mapping, and closing-ready schedules.",
              },
              {
                title: "Transaction Execution & Closings",
                text:
                  "Negotiation support, SPAs/SHAs, conditions precedent tracking, CP/CS checklists, and closing room leadership.",
              },
              {
                title: "Concessions & PPP Strategy",
                text:
                  "Regulatory mapping, concession frameworks, PPP risk allocation, and government liaison strategy.",
              },
              {
                title: "Cross-Border Disputes (Optional)",
                text:
                  "Arbitration-minded, discreet representation aligned with transaction goals and enforcement realities.",
              },
            ].map((card) => (
              <article key={card.title} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-subtle">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Method */}
      <Section id="method" className="bg-white border-y border-gray-200">
        <div className="container py-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Method</h2>
          <p className="mt-3 text-center text-subtle">Four steps. No noise.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: 1, t: "Kickoff", d: "Scope, timelines, document map, data room hygiene." },
              { n: 2, t: "Review", d: "Targeted review against deal thesis and risk registers." },
              { n: 3, t: "RAG Matrix", d: "Red/Amber/Green findings with actions, owners, deadlines." },
              { n: 4, t: "Closing Support", d: "CP/CS run-through, sign/close logistics, post-deal remedies." },
            ].map((s) => (
              <div key={s.n} className="text-center p-6 rounded-xl border border-gray-200">
                <div className="mx-auto w-10
