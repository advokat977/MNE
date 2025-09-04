// app/terms/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Terms of Use — MNE Consulting",
  description:
    "Terms for using mneconsulting.org. Contact us via the website contact form.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Use</h1>

      <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="text-xl font-semibold">Scope</h2>
          <p className="mt-2">
            This website provides general information about our consulting services. Nothing on this
            site constitutes legal advice. Engagements are governed by written terms agreed with
            clients.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">No warranty</h2>
          <p className="mt-2">
            We do not guarantee completeness, accuracy, or availability of the website. Use at your
            own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Calls and recordings</h2>
          <p className="mt-2">
            Consultations may be conducted via video conferencing. Calls may be recorded for internal
            quality and note-taking. Where required, an explicit consent notice will be shown before
            recording starts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2">
            For any questions about these terms, please reach out through the{" "}
            <Link href="/#contact" className="font-semibold underline underline-offset-4">
              contact form
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

