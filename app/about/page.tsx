// app/about/page.tsx
export const metadata = {
  title: "About — MNE Consulting",
  description:
    "Dejan Radinović — two decades of due diligence, privatizations, and international arbitration experience.",
};

export default function AboutPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>

      <p className="mt-6 max-w-3xl">
        MNE Consulting provides legal due diligence and deal support for EU investors entering Montenegro.
        The focus is clarity: source-anchored verification, practical risk grading, and recommendations that move a transaction forward.
      </p>

      <div className="mt-10 space-y-6 max-w-3xl">
        <p>
          With over two decades of practice, <strong>Dejan Radinović</strong> has advised the Government
          of Montenegro and leading international corporations on some of the country’s most significant privatizations
          and investment projects. His track record includes high-stakes due diligence exercises, complex M&A transactions,
          and representation in international arbitration disputes exceeding €800 million.
        </p>
        <p>
          Dejan combines deep knowledge of Montenegrin law with an understanding of EU regulatory standards, offering investors
          rare clarity at the intersection of local rules and cross-border business. This background ensures that each report
          delivered by MNE Consulting is both source-anchored and board-ready — a decisive advantage for EU clients evaluating
          opportunities in Montenegro.
        </p>
      </div>
    </div>
  );
}
