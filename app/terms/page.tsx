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
        Sending an inquiry does not create an attorney–client relationship. Do not send confidential information until we
        confirm an engagement in writing.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Copyright</h2>
      <p className="mt-2 text-subtle max-w-prose">
        © {new Date().getFullYear()} MNE Consulting. All rights reserved.
      </p>
    </div>
  );
}
