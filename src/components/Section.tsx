import Reveal from "./Reveal";

export type Tone = "light";

export function Band({
  id,
  tone,
  children,
  className = "py-20",
}: {
  id?: string;
  tone: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`tone-${tone} scroll-mt-16 border-t border-line`}>
      <div className={`px-[8%] ${className}`}>{children}</div>
    </section>
  );
}

export default function Section({
  id,
  tone,
  number,
  label,
  title,
  subtitle,
  children,
}: {
  id: string;
  tone: Tone;
  number: string;
  label: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <Band id={id} tone={tone}>
      <Reveal>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">
          {number} — {label}
        </p>
        {title && <h2 className="font-serif text-4xl tracking-tight md:text-5xl">{title}</h2>}
        {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
      </Reveal>
      <div className="mt-12">{children}</div>
    </Band>
  );
}
