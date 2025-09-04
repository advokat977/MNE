export const metadata = {
  title: "Terms of Use — MNE Consulting",
  description:
    "Terms for using mneconsulting.org and booking intro calls. No legal advice; no attorney–client relationship is formed by website use.",
};

export default function TermsPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Use</h1>

      <p className="mt-4 text-subtle max-w-prose">
        This website provides general information about our legal consulting services in Montenegro.
        It does not constitute legal advice. Engaging us requires a written engagement letter.
        <strong> Submitting the contact form does not establish an attorney–client relationship.</strong>
        By using this site you agree not to rely on the content as legal advice and to contact us
        directly for specific matters.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Use of the site</h2>
      <p className="mt-2 text-subtle max-w-prose">
        Content is provided “as is” for general information. We try to keep it accurate and current,
        but make no warranties and accept no responsibility for reliance on it. We may change,
        suspend, or remove content at any time.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Intro calls, scheduling &amp; Zoom</h2>
      <p className="mt-2 text-subtle max-w-prose">
        Intro consultations are scheduled via Cal.com and hosted on Zoom. By booking, you consent
        to the transfer of booking metadata to these providers for the purpose of arranging the
        meeting and generating a call link.
      </p>
      <p className="mt-2 text-subtle max-w-prose">
        Calls may be recorded only with your explicit consent at the start of the meeting. If a
        recording is made, it is used solely for internal note-taking and quality purposes and is
        deleted within <strong>180 days</strong>. You can object to recording at any time.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Acceptable use</h2>
      <p className="mt-2 text-subtle max-w-prose">
        You agree not to misuse the site or booking tools (e.g., spam, automated scraping, denial
        of service, unlawful or abusive content). We may cancel bookings and restrict access in case
        of misuse.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Intellectual property</h2>
      <p className="mt-2 text-subtle max-w-prose">
        Unless stated otherwise, all text, design, and graphics on this site are our property. You
        may not reproduce or redistribute content without prior written permission.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Limitation of liability</h2>
      <p className="mt-2 text-subtle max-w-prose">
        To the maximum extent permitted by law, we disclaim liability for any loss arising from the
        use of this site, including reliance on its content or the unavailability of the site or
        booking tools.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Governing law</h2>
      <p className="mt-2 text-subtle max-w-prose">
        These Terms are governed by the laws of Montenegro. Any disputes shall be subject to the
        exclusive jurisdiction of the competent courts in Podgorica.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Changes</h2>
      <p className="mt-2 text-subtle max-w-prose">
        We may update these Terms from time to time. The version posted on this page is the one
        currently in force.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-subtle max-w-prose">
        For any questions about these Terms, please{" "}
        <a className="underline hover:no-underline" href="/#contact">
          contact us via the form
        </a>
        .
      </p>

      <h2 className="mt-6 text-xl font-semibold">Copyright</h2>
      <p className="mt-2 text-subtle max-w-prose">
        © {new Date().getFullYear()} MNE Consulting. All rights reserved.
      </p>
    </div>
  );
}
