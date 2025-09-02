import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="container py-10 text-center text-sm text-subtle">
        <p>&copy; {new Date().getFullYear()} MNE Consulting. All rights reserved.</p>
        <p className="mt-2">Podgorica, Montenegro • EU-facing operations compliant with GDPR.</p>
        <p className="mt-2">
          <Link href="/privacy" className="underline hover:no-underline">Privacy</Link>
          {" "}·{" "}
          <Link href="/terms" className="underline hover:no-underline">Terms</Link>
          {" "}·{" "}
          <a className="underline hover:no-underline" href="mailto:info@mneconsulting.org">info@mneconsulting.org</a>
        </p>
      </div>
    </footer>
  );
}
