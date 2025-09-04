export default function TermsPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Use</h1>
      <p className="mt-4 text-subtle max-w-prose">
        This website provides general information about our legal consulting services in Montenegro.
        It does not constitute legal advice. Engaging us requires a written engagement letter.
        By using this site you agree not to rely on the content as legal advice and to contact us directly for specific matters.
      </p>

      <h2 className="mt-8 text-xl font-semibold">No attorney–client relationship</h2>
      <p className="mt-2 text-subtle max-w-prose">
        Submitting the contact form does not establish an attorney–client relationship. Do not send confidential
        information until we confirm an engagement in writing.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Acceptable use</h2>
      <p className="mt-2 text-subtle max-w-prose">
        You may not misuse the site, attempt to breach security, or interfere with other users. We reserve the right
        to limit access where necessary to protect the service.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Limitation of liability</h2>
      <p className="mt-2 text-subtle max-w-prose">
        To the maximum extent permitted by law, we exclude liability for any loss arising from your use of the site or
        reliance on its contents.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Governing law</h2>
      <p className="mt-2 text-subtle max-w-prose">
        These terms are governed by the laws of Montenegro. Any disputes will be subject to the exclusive jurisdiction
        of the Montenegrin courts.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-subtle max-w-prose">
        For any questions about these terms, please use the{" "}
        <a className="underline hover:no-underline" href="/#contact">contact form</a>.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Copyright</h2>
      <p className="mt-2 text-subtle max-w-prose">
        © {new Date().getFullYear()} MNE Consulting. All rights reserved.
      </p>
    </div>
  );
}
