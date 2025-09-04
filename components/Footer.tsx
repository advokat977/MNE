// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-sm text-slate-600 dark:text-slate-400 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} MNE Consulting. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white">
            Terms
          </Link>
          <Link href="/#contact" className="hover:text-slate-900 dark:hover:text-white">
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-white"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
