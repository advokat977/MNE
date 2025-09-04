// app/terms/page.tsx
export const metadata = {
  title: "Terms of Use — MNE Consulting",
  description:
    "Terms of use for mneconsulting.org. This website provides general information about our legal consulting services in Montenegro. Scheduling is provided via Cal.com and video meetings are hosted on Zoom.",
};

export default function TermsPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Use</h1>
      <p className="mt-4 text-subtle max-w-prose">
        This website provides general information about our legal consulting services in Montenegro.
        It does not constitute legal advice. Engaging us requires a written engagement letter.
        By using this site you agree not to rely on the content as legal advice and to contact us
        directly for specific matters.
      </p>

      <h2 className="mt-8 text-xl font-semibold">No attorney–client relationship</h2>
      <p className="mt-2 text-subtle max-w-prose">
        Sending an inquiry does not create an attorney–client relationship. Do not send confidential
        information until we confirm an engagement in writing.
      </p>
      <p className="mt-2 text-subtle max-w-prose">
        Submitting the contact form does not establish an attorney–client relationship.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Scheduling &amp; third-party services</h2>
      <p className="mt-2 text-subtle max-w-prose">
        We use <strong>Cal.com</strong> to allow you to schedule introductory calls. When you book a slot,
        Cal.com processes your name, email, time zone, and selected time to generate a calendar
        invitation and reminders. For video meetings, we use <strong>Zoom</strong>, which generates a unique
        meeting link for the scheduled time. Your use of these services may also be subject to their
        respective terms and privacy notices:
      </p>
      <ul className="mt-2 list-disc pl-6 text-subtle max-w-prose space-y-1">
        <li>
          <a
            href="https://cal.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Cal.com Terms
          </a>{" "}
          &middot;{" "}
          <a
            href="https://cal.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Cal.com Privacy
          </a>
        </li>
        <li>
          <a
            href="https://explore.zoom.us/en/terms/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Zoom Terms of Service
          </a>{" "}
          &middot;{" "}
          <a
            href="https://explore.zoom.us/en/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Zoom Privacy Statement
          </a>
        </li>
      </ul>
      <p className="mt-2 text-subtle max-w-prose">
        Rescheduling or cancellation should be done via the links provided in your booking
        confirmation email. Meetings are <em>not recorded by default</em>. If recording is ever
        proposed, we will ask for your explicit consent in advance.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Acceptable use</h2>
      <p className="mt-2 text-subtle max-w-prose">
        You agree not to misuse the site, attempt unauthorized access, interfere with its operation,
        or use automated means to harvest information. You must not upload or transmit unlawful,
        defamatory, infringing, or malicious content through our forms or booking flows.
      </p>

      <h2 className="mt-8 text-xl font-semibold">No warranties; limitation of liability</h2>
      <p className="mt-2 text-subtle max-w-prose">
        The site is provided on an “as is” and “as available” basis. We make no warranties regarding
        accuracy, completeness, availability, or fitness for a particular purpose. To the maximum
        extent permitted by law, we are not liable for any indirect, incidental, special,
        consequential, or punitive damages arising from your use of the site or third-party
        services linked or embedded herein (including Cal.com and Zoom).
      </p>

      <h2 className="mt-8 text-xl font-semibold">Intellectual property</h2>
      <p className="mt-2 text-subtle max-w-prose">
        All content on this site is owned by or licensed to us and is protected by applicable
        intellectual property laws. You may not reproduce, distribute, or create derivative works
        from the site content without prior written permission, except as permitted by law.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Governing law</h2>
      <p className="mt-2 text-subtle max-w-prose">
        These Terms are governed by the laws of Montenegro. Any disputes arising out of or in
        connection with these Terms shall be subject to the exclusive jurisdiction of the competent
        courts in Montenegro.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Changes to these Terms</h2>
      <p className="mt-2 text-subtle max-w-prose">
        We may update these Terms from time to time. The “Last updated” date below indicates the
        most recent changes. Continued use of the site after changes take effect constitutes your
        acceptance of the updated Terms.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Copyright</h2>
      <p className="mt-2 text-subtle max-w-prose">
        © {new Date().getFullYear()} MNE Consulting. All rights reserved.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-subtle max-w-prose">
        For questions regarding these Terms, contact{" "}
        <a className="underline hover:no-underline" href="mailto:info@mneconsulting.org">
          info@mneconsulting.org
        </a>
        .
      </p>

      <p className="mt-8 text-subtle max-w-prose">
        <em>Last updated: {new Date().toISOString().slice(0, 10)}</em>
      </p>
    </div>
  );
}
