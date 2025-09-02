import Section from "../components/Section";
import ContactForm from "../components/ContactForm";

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
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-3">
                Request Proposal
              </a>
              <a href="#method" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 hover:bg-white">
                How we work
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-subtle">
              <li>Montenegrin Bar (since 2004)</li>
              <li>World Triathlon Tribunal</li>
              <li>20+ years litigation & transactions</li>
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
                <div className="mx-auto w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                  {s.n}
                </div>
                <h3 className="mt-4 font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-subtle">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Fees */}
      <Section id="fees">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Transparent Fees</h2>
          <p className="mt-3 text-center text-subtle">Clear ranges. Serious intent.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold">Basic Due Diligence</h3>
              <p className="mt-2 text-2xl font-semibold">€7.5k</p>
              <p className="mt-2 text-sm text-subtle">Focused high-level review of key legal domains and red flags for smaller tickets.</p>
            </div>
            <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Standard Due Diligence</h3>
              <p className="mt-2 text-2xl font-semibold">€15k–€25k</p>
              <p className="mt-2 text-sm text-subtle">Comprehensive corporate, regulatory, and property law review for mid-sized transactions.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold">Premium Due Diligence</h3>
              <p className="mt-2 text-2xl font-semibold">€30k–€50k+</p>
              <p className="mt-2 text-sm text-subtle">Complex, high-value deals, deep research, schedules, and on-site coordination.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="bg-white border-y border-gray-200">
        <div className="container py-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 text-subtle leading-relaxed max-w-3xl">
            Licensed attorney with 20+ years across courtroom litigation and complex corporate transactions. Member of the World Triathlon Tribunal. Reports are concise, source-anchored, and decision-oriented.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-subtle">
            <li>• High-profile corporate and concession matters</li>
            <li>• Cross-border coordination with EU counsel</li>
            <li>• Board-ready outputs in English</li>
          </ul>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Contact</h2>
          <p className="mt-3 text-center text-subtle">All inquiries are treated as strictly confidential under attorney–client privilege.</p>
          <div className="mx-auto mt-10 max-w-2xl bg-white border border-gray-200 rounded-2xl p-6">
            <ContactForm />
            <div className="mt-4 text-sm text-subtle">
              We reply within 1–2 business days. Confidential by default.
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
