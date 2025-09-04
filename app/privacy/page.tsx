// app/privacy/page.tsx
export const metadata = {
  title: "Privacy Policy — MNE Consulting",
  description:
    "Privacy policy for mneconsulting.org. We process only the data necessary to respond to your inquiry, schedule calls (Cal.com), and host video meetings (Zoom). Calls may be recorded as described below.",
};

export default function PrivacyPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-subtle max-w-3xl">
        We take privacy seriously. This page explains what we collect on{" "}
        <strong>mneconsulting.org</strong>, why we collect it, and how we keep it secure.
      </p>

      <div className="mt-10 space-y-8 max-w-3xl">
        {/* Data we collect */}
        <section>
          <h2 className="text-xl font-semibold">Data we collect</h2>
          <ul className="mt-3 list-disc pl-6 text-subtle space-y-2">
            <li>
              <strong>Contact form:</strong> name, email, company, service of interest, and your
              message — for the purpose of responding to your inquiry.
            </li>
            <li>
              <strong>Scheduling (Cal.com):</strong> name, email, time zone, selected time slot,
              and any answers to booking questions. Cal.com generates calendar invitations and
              reminders on our behalf.
            </li>
            <li>
              <strong>Video meetings (Zoom):</strong> meeting metadata (date/time, meeting ID/link)
              to host the call.
            </li>
            <li>
              <strong>Call recordings (Zoom):</strong> if recording is enabled, audio and/or video,
              screen shares, and in-meeting chat content may be captured. Zoom displays a prominent
              recording notice when recording is active.
            </li>
            <li>
              <strong>Routine logs &amp; performance metrics:</strong> standard web analytics and
              performance measurements (via Vercel) to keep the site reliable and fast. No
              invasive tracking, no ad-tech.
            </li>
          </ul>
        </section>

        {/* Email processing */}
        <section>
          <h2 className="text-xl font-semibold">Email processing</h2>
          <p className="mt-3 text-subtle">
            We use <strong>Resend</strong> as our email processor to send transactional emails
            (submission confirmations and internal notifications). Your message is processed solely
            for the purpose of delivering that email and responding to your inquiry.
          </p>
        </section>

        {/* Scheduling & Video */}
        <section>
          <h2 className="text-xl font-semibold">Scheduling &amp; video meetings</h2>
          <p className="mt-3 text-subtle">
            We use <strong>Cal.com</strong> to let you book a time that works for you. When you
            book, Cal.com processes your name, email, time zone, and selected slot to generate a
            calendar invite and reminders. For the meeting itself, we use <strong>Zoom</strong> to
            create a unique video link.
          </p>
          <p className="mt-3 text-subtle">
            For more information, see the respective privacy notices:{" "}
            <a
              href="https://cal.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Cal.com Privacy
            </a>{" "}
            and{" "}
            <a
              href="https://explore.zoom.us/en/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Zoom Privacy
            </a>
            .
          </p>
        </section>

        {/* Recordings */}
        <section>
          <h2 className="text-xl font-semibold">Call recordings</h2>
          <p className="mt-3 text-subtle">
            We record certain Zoom calls to document advice, maintain quality standards, and keep
            internal records. Zoom will show you an on-screen notice when recording is active. By
            remaining in a recorded meeting, you acknowledge recording. If you do not agree, you
            can leave the meeting and request a non-recorded alternative.
          </p>
          <ul className="mt-3 list-disc pl-6 text-subtle space-y-2">
            <li>
              <strong>Content:</strong> audio/video, screen shares, and in-meeting chat may be
              included in the recording.
            </li>
            <li>
              <strong>Purpose:</strong> documentation of work performed, quality assurance, and
              compliance.
            </li>
            <li>
              <strong>Lawful basis:</strong>{" "}
              <em>legitimate interest</em> (documenting and delivering services). When applicable,
              processing may also be necessary for the <em>performance of a contract</em>.
            </li>
            <li>
              <strong>Access:</strong> restricted to authorized personnel and, where relevant,
              outside counsel or service providers under confidentiality obligations.
            </li>
            <li>
              <strong>Retention:</strong> recordings are retained for up to <strong>180 days</strong>,
              unless a longer period is required by law or for the establishment, exercise, or
              defense of legal claims.
            </li>
            <li>
              <strong>Storage:</strong> recordings are stored securely under our account. We apply
              reasonable technical and organizational measures to protect them.
            </li>
            <li>
              <strong>Your choices:</strong> you can request a copy or deletion of a recording,
              subject to legal holds or overriding obligations.
            </li>
          </ul>
        </section>

        {/* Legal basis */}
        <section>
          <h2 className="text-xl font-semibold">Legal basis</h2>
          <p className="mt-3 text-subtle">
            Our legal basis for processing contact, scheduling, and meeting data is{" "}
            <em>legitimate interest</em> (responding to requests, scheduling calls, documenting
            services). If we enter into an engagement, subsequent processing may also be necessary
            for the <em>performance of a contract</em>. We do not use your data for marketing
            without your consent.
          </p>
        </section>

        {/* International transfers */}
        <section>
          <h2 className="text-xl font-semibold">International transfers</h2>
          <p className="mt-3 text-subtle">
            Some processors (e.g., email, scheduling, video) may process data outside your
            jurisdiction, including in the EU/EEA and the United States. Where applicable, we rely
            on providers’ data protection agreements and Standard Contractual Clauses (SCCs).
          </p>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-xl font-semibold">Security</h2>
          <p className="mt-3 text-subtle">
            We use modern hosting and transport security (TLS) and industry-standard email
            controls (SPF/DKIM/DMARC). Access to third-party tools is limited to authorized
            accounts and protected by strong authentication.
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-xl font-semibold">Cookies</h2>
          <p className="mt-3 text-subtle">
            We do not use advertising cookies. Cal.com’s scheduling widget and Zoom’s meeting
            experience may set strictly necessary cookies to deliver their functionality; refer to
            their privacy notices for details.
          </p>
        </section>

        {/* Your rights */}
        <section>
          <h2 className="text-xl font-semibold">Your rights</h2>
          <p className="mt-3 text-subtle">
            You may request access, correction, or deletion of your personal data. You may also
            object to or restrict processing, and request data portability, where applicable. To
            exercise your rights, email{" "}
            <a className="underline hover:no-underline" href="mailto:info@mneconsulting.org">
              info@mneconsulting.org
            </a>
            .
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-3 text-subtle">
            Controller: MNE Consulting, Podgorica, Montenegro. For any privacy questions, contact{" "}
            <a className="underline hover:no-underline" href="mailto:info@mneconsulting.org">
              info@mneconsulting.org
            </a>
            .
          </p>
          <p className="mt-3 text-subtle">Last updated: {new Date().toISOString().slice(0, 10)}</p>
        </section>
      </div>
    </div>
  );
}
