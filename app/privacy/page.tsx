// app/privacy/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — MNE Consulting",
  description:
    "How we collect, use, and protect your data. Contact us via the website contact form.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>

      <p className="mt-6 text-slate-700 dark:text-slate-300">
        We collect only what is necessary to deliver our services: contact details submitted via the{" "}
        <Link href="/#contact" className="font-semibold underline underline-offset-4">
          contact form
        </Link>
        , and metadata required for security and analytics.
      </p>

      <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="text-xl font-semibold">Data we collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Information you provide in the contact form (name, email, message).</li>
            <li>Technical logs for security (IP, timestamps, user agent).</li>
            <li>Non-identifying analytics (page views, referrers).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">How we use data</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>To respond to your inquiry and deliver requested services.</li>
            <li>To secure our systems and prevent abuse.</li>
            <li>To improve content and user experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Calls and recordings</h2>
          <p className="mt-2">
            Video calls scheduled via our booking page may be recorded for internal quality and note-taking.
            Where required, we will provide an on-screen consent notice before recording starts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Your rights</h2>
          <p className="mt-2">
            You can request access, correction, or deletion of your personal data. To exercise your rights,
            please contact us through the{" "}
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
