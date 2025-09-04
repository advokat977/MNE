import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#FAFAFA] border-b border-gray-200/70">
      <div className="container mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-sm font-medium">
          MNE Consulting
        </Link>

        {/* Primary nav (bez duplog Book linka) */}
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/#services" className="hover:opacity-80">Services</Link>
          <Link href="/#method" className="hover:opacity-80">Method</Link>
          <Link href="/#fees" className="hover:opacity-80">Fees</Link>
          <Link href="/#about" className="hover:opacity-80">About</Link>
          <Link href="/#contact" className="hover:opacity-80">Contact</Link>

          {/* Jedino CTA dugme — svetlo */}
          <Link
            href="/book"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-white hover:shadow transition"
          >
            Book Zoom Call
          </Link>
        </nav>

        {/* Mobile: samo CTA (jednostavno) */}
        <Link
          href="/book"
          className="sm:hidden inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 shadow-sm"
        >
          Book Zoom Call
        </Link>
      </div>
    </header>
  );
}
