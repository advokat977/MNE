export const metadata = {
  title: "Privacy Policy — MNE Consulting",
  description:
    "Privacy policy for mneconsulting.org. We respect confidentiality and process only the data necessary to respond to your inquiry.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="container py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-subtle max-w-3xl">
          We take privacy seriously. This page explains what we collect on{" "}
          <strong>mneconsulting.org</strong>, why we collect it, and how we keep it secure.
        </p>

        <div className="mt-10 space-y-8 max-w-3xl">
          <section>
            <h2 className="text-xl font-semibold">Data we collect</h2>
            <ul className="mt-3 list-disc pl-6 text-subtle space-y-2">
              <li>
                <strong>Contact form:</strong> name, email, company, service of interest, and your
                message — for the purpose of responding to your inquiry.
              </li>
              <li>
                <strong>Routine logs &amp; performance metrics:</strong> standard web analytics and
                performance measurements (via Vercel) to keep the site reliable and fast. No
                invasive tracking, no ad-tech.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Email processing</h2>
            <p className="mt-3 text-subtle">
              We use <strong>Resend</strong> as our email processor to send transactional emails
              (submission confirmations and internal notifications). Your message is processed
              solely for the purpose of delivering that email and responding to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Scheduling & video</h2>
            <p className="mt-3 text-subtle">
              If you use the booking page, scheduling is provided by <strong>Cal.com</strong> and
              video meetings by <strong>Zoom</strong>. Only the data necessary to schedule and hold
              the call is processed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Legal basis</h2>
            <p className="mt-3 text-subtle">
              Our legal basis for processing contact form data is <em>legitimate interest</em>{" "}
              (responding to your request and preparing a potential engagement). Submitting the form
              does not create an attorney–client relationship.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Retention</h2>
            <p className="mt-3 text-subtle">
              We retain contact emails only as long as needed to handle your request and comply with
              legal obligations. You can request deletion at any time via the{" "}
              <a className="underline hover:no-underline" href="/#contact">
                contact form
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Security</h2>
            <p className="mt-3 text-subtle">
              We use modern hosting and transport security (TLS) and industry-standard email
              controls (SPF/DKIM/DMARC) for domain integrity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Your rights</h2>
            <p className="mt-3 text-subtle">
              You may request access, correction, or deletion of your personal data using the{" "}
              <a className="underline hover:no-underline" href="/#contact">
                contact form
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-3 text-subtle">
              Controller: MNE Consulting, Podgorica, Montenegro. For any privacy questions, please
              use the{" "}
              <a className="underline hover:no-underline" href="/#contact">
                contact form
              </a>
              .
            </p>
            <p className="mt-3 text-subtle">Last updated: {new Date().toISOString().slice(0, 10)}</p>
          </section>
        </div>
      </div>
    </section>
  );
}
