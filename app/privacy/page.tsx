export const metadata = {
  title: "Privacy Policy — MNE Consulting",
  description:
    "How MNE Consulting collects and uses data on mneconsulting.org. Strict, minimal, and purpose-bound processing aligned with EU expectations.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="container py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-subtle max-w-3xl">
          We take privacy seriously. This page explains what we collect on{" "}
          <strong>mneconsulting.org</strong>, why we collect it, and how we keep it secure.
          Processing is minimal, purpose-limited, and aligned with EU standards.
        </p>

        <div className="mt-10 space-y-10 max-w-3xl">
          <section>
            <h2 className="text-xl font-semibold">Data we collect</h2>
            <ul className="mt-3 list-disc pl-6 text-subtle space-y-2">
              <li>
                <strong>Contact form:</strong> name, email, company, service of interest, and your
                message — solely to respond to your inquiry.
              </li>
              <li>
                <strong>Scheduling:</strong> when you book via our{" "}
                <a className="underline hover:no-underline" href="/book">
                  /book
                </a>{" "}
                page, Cal.com processes the slot selection and creates a Zoom meeting link. We
                receive booking metadata (name, email, selected time) to host the call.
              </li>
              <li>
                <strong>Routine logs &amp; performance metrics:</strong> standard web analytics and
                performance measurements (via Vercel Analytics and Speed Insights) to keep the site
                reliable and fast. No invasive tracking, no ad-tech, no cross-site profiling.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Email processing</h2>
            <p className="mt-3 text-subtle">
              We use <strong>Resend</strong> as our email processor to send transactional messages
              (submission confirmations and internal notifications). Messages are processed only to
              deliver those emails and to respond to your inquiry. Authentication for our domain is
              enforced (SPF/DKIM/DMARC).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Calls and recordings</h2>
            <p className="mt-3 text-subtle">
              Intro calls are hosted on <strong>Zoom</strong> and scheduled through{" "}
              <strong>Cal.com</strong>. We may record a call <em>only</em> with your explicit
              consent at the start of the meeting, and solely for internal note-taking and quality
              purposes. If recorded, we retain the file for up to <strong>180 days</strong> and then
              delete it. You can ask us not to record at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Legal basis</h2>
            <p className="mt-3 text-subtle">
              Our legal basis for processing contact and booking data is{" "}
              <em>legitimate interest</em> (replying to your request, preparing a potential
              engagement, and operating our site/services). We process no special categories of
              data via the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Retention</h2>
            <p className="mt-3 text-subtle">
              We retain contact messages only as long as needed to handle your request and meet
              legal obligations. Booking metadata is retained per operational necessity. Where a
              recording exists (with consent), retention is limited to 180 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Security</h2>
            <p className="mt-3 text-subtle">
              We use modern hosting and transport security (TLS), strict DNS/email authentication
              (SPF/DKIM/DMARC), and reputable subprocessors (Vercel, Resend, Cal.com, Zoom). Access
              is limited to legitimate business needs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Your rights</h2>
            <p className="mt-3 text-subtle">
              You may request access, correction, or deletion of your personal data. To exercise a
              right, please{" "}
              <a className="underline hover:no-underline" href="/#contact">
                contact us via the form
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Controller &amp; contact</h2>
            <p className="mt-3 text-subtle">
              Controller: <strong>MNE Consulting</strong>, Podgorica, Montenegro. For any privacy
              questions, please{" "}
              <a className="underline hover:no-underline" href="/#contact">
                reach us through the contact form
              </a>
              .
            </p>
            <p className="mt-3 text-subtle">
              Last updated: {new Date().toISOString().slice(0, 10)}
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
