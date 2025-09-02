export default function PrivacyPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-subtle max-w-prose">
        We process personal data strictly to respond to your inquiry and to perform a potential engagement.
        We do not sell personal data, we do not send marketing emails, and we do not use third-party trackers.
        You can request access or deletion at any time by emailing{" "}
        <a className="underline" href="mailto:info@mneconsulting.org">info@mneconsulting.org</a>.
      </p>

      <h2 className="mt-8 text-xl font-semibold">What we collect</h2>
      <p className="mt-2 text-subtle max-w-prose">
        Contact details and the content of your inquiry submitted via our contact form or email.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Retention</h2>
      <p className="mt-2 text-subtle max-w-prose">
        Inquiry data is retained only as long as necessary to handle your request or to perform an engagement.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Your rights</h2>
      <p className="mt-2 text-subtle max-w-prose">
        You may request access, correction, deletion, or restriction of processing by contacting us.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Controller</h2>
      <p className="mt-2 text-subtle max-w-prose">
        MNE Consulting, Podgorica, Montenegro — <a className="underline" href="mailto:info@mneconsulting.org">info@mneconsulting.org</a>.
      </p>
    </div>
  );
}
