export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="container flex items-center justify-between py-3">
        <a href="/" className="font-medium">MNE Consulting</a>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          {/* Absolute hash links so they work from subpages */}
          <a href="/#services" className="hover:underline">Services</a>
          <a href="/#method" className="hover:underline">Method</a>
          <a href="/#fees" className="hover:underline">Fees</a>
          <a href="/#about" className="hover:underline">About</a>
          <a href="/#contact" className="hover:underline">Contact</a>

          {/* single CTA only (no duplicate plain “Book” link) */}
          <a
            href="/book"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-white hover:shadow transition"
          >
            Book Zoom Call
          </a>
        </nav>
      </div>
    </header>
  );
}
