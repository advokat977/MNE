// components/PriceCard.tsx
import Link from "next/link";

type Props = {
  title: string;
  blurb: string;
  bullets: string[];
  priceLabel: string;
  priceHref?: string; // ako postoji, cijena je link (npr. Custom -> contact form)
};

export default function PriceCard({ title, blurb, bullets, priceLabel, priceHref }: Props) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md dark:border-slate-800">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{blurb}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-slate-400 dark:bg-slate-600" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pt-6">
        {priceHref ? (
          <Link
            href={priceHref}
            className="inline-block text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-700 dark:text-white dark:decoration-slate-600 dark:hover:decoration-slate-300"
          >
            {priceLabel}
          </Link>
        ) : (
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{priceLabel}</p>
        )}
      </div>
    </div>
  );
}
