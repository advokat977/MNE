import Section from "../components/Section";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="section-tight hero-surface">
        <div className="container">
          <div className="max-w-3xl">
            <h1>Trusted Local Counsel for EU Investors in Montenegro</h1>
            <p className="mt-5 text-lg text-subtle max-w-prose">
              Board-ready due diligence, transaction execution, and concession strategy — EU
              standards, Montenegro know-how. Reports prepared by a licensed attorney with 20+ years
              of courtroom and corporate experience.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/#contact" className="btn-accent">Request Proposal</a>
              <a href="/#method" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 hover:bg-white">How we work</a>
              <a href="/book" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 hover:bg-white">Book Intro Call</a>
            </div>
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm chip-muted">
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
          <h2 className="text-center">Services</h2>
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
              <article key={card.title} className="card p-6">
                <h3>{card.title}</h3>
                <p className="mt-2 text-sm text-subtle">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Method – blaga traka */}
      <Section id="method" className="surface-muted">
        <div className="container py-16">
          <h2 className="text-center">Method</h2>
          <p className="mt-3 text-center text-subtle">Four steps. No noise.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: 1, t: "Kickoff", d: "Scope, timelines, document map, data room hygiene." },
              { n: 2, t: "Review", d: "Targeted review against deal thesis and risk registers." },
              { n: 3, t: "RAG Matrix", d: "Red/Amber/Green findings with actions, owners, deadlines." },
              { n: 4, t: "Closing Support", d: "CP/CS run-through, sign/close logistics, post-deal remedies." },
            ].map((s) => (
              <div key={s.n} className="text-center p-6 rounded-xl border border-gray-200 bg-white">
                <div className="mx-auto w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white" style={{background:"var(--accent)"}}>
                  {s.n}
                </div>
                <h3 className="mt-4 font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-subtle">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Fees – blaga traka */}
      <Section id="fees" className="surface-muted">
        <div className="container">
          <h2 className="text-center">Transparent Fees</h2>
          <p className="mt-3 text-center text-subtle">Clear ranges. Serious intent.</p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Basic Due Diligence",
                bullets: [
                  "Focused red-flags across core legal areas",
                  "2–3 stakeholder interviews",
                  "Concise report with prioritized actions",
                ],
                price: "Starting from €7.500",
              },
              {
                title: "Standard Due Diligence",
                bullets: [
                  "Full-scope corporate, regulatory, property",
                  "Contract review + warranties/indemnities map",
                  "Closing-ready schedules and checklists",
                ],
                price: "Starting from €15.000",
              },
              {
                title: "Premium Due Diligence",
                bullets: [
                  "Complex targets and multi-party transactions",
                  "Deep research + regulator liaison strategy",
                  "On-site coordination & negotiation support",
                ],
                price: "Starting from €30.000",
              },
              {
                title: "Custom",
                bullets: [
                  "Tailored scope for your specific deal",
                  "Mix & match: DD, execution, PPP/concessions",
                  "Fixed fee or blended model after scoping call",
                ],
                price: <a className="link-accent" href="/#contact">Tell us your goals → get a proposal</a>,
              },
            ].map((pkg) => (
              <article key={pkg.title} className="card p-6">
                <h3>{pkg.title}</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-subtle space-y-1">
                  {pkg.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <p className="mt-5 font-semibold">{pkg.price}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* About – tvoj novi tekst */}
      <Section id="about">
        <div className="container">
          <h2>About</h2>
          <p className="mt-4 text-subtle leading-relaxed max-w-3xl">
            With over two decades of practice, Dejan Radinović has advised the Government of Montenegro and leading
            international corporations on some of the country’s most significant privatizations and investment
            projects. His track record includes high-stakes due diligence exercises, complex M&A transactions, and
            representation in international arbitration disputes exceeding €800 million.
          </p>
          <p className="mt-4 text-subtle leading-relaxed max-w-3xl">
            Dejan combines deep knowledge of Montenegrin law with an understanding of EU regulatory standards, offering
            investors rare clarity at the intersection of local rules and cross-border business. This background ensures
            that each report delivered by MNE Consulting is both source-anchored and board-ready — a decisive advantage
            for EU clients evaluating opportunities in Montenegro.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-subtle">
            <li>• Member of the Montenegrin Bar since 2004; Managing Partner experience.</li>
            <li>• Member, World Triathlon Tribunal (international sports governance).</li>
            <li>• Founder of Ugovor24 (legal-tech platform for contract automation).</li>
            <li>• University of Bologna — advanced legal studies.</li>
          </ul>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="surface-muted">
        <div className="container">
          <h2 className="text-center">Contact</h2>
          <p className="mt-3 text-center text-subtle">
            All inquiries are treated as strictly confidential under attorney–client privilege.
          </p>
          <div className="mx-auto mt-10 max-w-2xl card p-6">
            <ContactForm />
            <div className="mt-4 text-sm text-subtle">
              Prefer to speak live? <a href="/book" className="link-accent">Book a 30-min Zoom</a>.
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
