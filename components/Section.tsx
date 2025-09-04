import clsx from "clsx";

type Props = {
  id?: string;
  className?: string;       // npr. "section-tight" ili "surface-white"
  children: React.ReactNode;
};

export default function Section({ id, className, children }: Props) {
  return (
    <section id={id} className={clsx("section", className)}>
      <div className="container">{children}</div>
    </section>
  );
}
