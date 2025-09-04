// app/page.tsx
import Link from "next/link";
import PriceCard from "@/components/PriceCard";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "MNE Consulting — Due Diligence in Montenegro",
  description:
    "Source-anchored, board-ready due diligence for EU investors evaluating opportunities in Montenegro.",
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* HERO */}
      <section className="py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Due diligence in Montenegro — source-anchored, board-ready.
          </h1>
          <p className="mt-4 text-slate-700 dark:text-slate-300">
            We help EU investors make clear, defensible decisions. Our reports combine primary
            source verification, practical risk flags, and deal-oriented recommendations you can
            take straight to the board.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/book"
              className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 focus-ring dark:bg-white dark:text-slate-900"
            >
              Book a 30-min call
            </Link>
            <Link
              href="/#contact"
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus-ring dark:border-slate-700 dark:text-white dark:hover:bg-slate-900/40"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-header py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
          Legal due diligence for acquisitions, joint ventures, privatizations, and project
          investments in Montenegro. We also support negotiation strategy and documentation
          alignment with EU investor expectations.
        </p>
      </section>

      {/* METHOD */}
      <section id="method" className="scroll-mt-header py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Method</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
          <li>Primary-source verification (registries, land books, regulator filings).</li>
          <li>Red/Amber/Green risk grading with plain-language rationale.</li>
          <li>Actionable mitigations and SPA/SHAs drafting notes.</li>
          <li>Board-ready summary up front; annexes for depth.</li>
        </ul>
      </section>

      {/* FEES */}
      <section id="fees" className="scroll-mt-header py-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Fees</h2>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Transparent bands. Scope defines final quote.
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <PriceCard
            title="Basic"
            blurb="Focused red flags and core registry checks for smaller targets."
            bullets={[
              "Corporate & title snapshot",
              "Regulatory flags",
              "Key contracts scan",
              "Board-ready summary",
            ]}
            priceLabel="Starting from €7,500"
          />
          <PriceCard
            title="Standard"
            blurb="Deeper issue mapping for typical buy-side diligence."
            bullets={[
              "Full corporate, assets, and permits",
              "Material contracts & disputes",
              "Employment & compliance",
              "Mitigations & drafting notes",
            ]}
            priceLabel="Starting from €15,000"
          />
          <PriceCard
            title="Premium"
            blurb="Complex transactions, multi-asset, or aggressive timelines."
            bullets={[
              "All-in verification & interviews",
              "Regulator engagement plan",
              "Negotiation support",
              "Partner workshops",
            ]}
            priceLabel="Starting from €30,000"
          />
          <PriceCard
            title="Custom"
            blurb="Tailored to your specific needs."
            bullets={[
              "Bespoke scope & timeline",
              "Specialist inputs as needed",
              "Investor reporting format",
              "On-site sessions",
            ]}
            // Klik vodi na contact form (dogovoreno)
            priceLabel="Price: upon request →"
            priceHref="/#contact"
          />
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section id="about" className="scroll-mt-header py-10">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
          Led by Dejan Radinović. Two decades across privatizations, high-stakes due diligence,
          complex M&A, and international arbitration.{" "}
          <Link href="/about" className="font-semibold underline underline-offset-4">
            Learn more →
          </Link>
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-header py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
          Tell us about the target, the deal context, and your timelines. We’ll get back to you
          with next steps and a scoped proposal.
        </p>
        <div className="mt-6 max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
