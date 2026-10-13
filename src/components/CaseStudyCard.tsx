import type { CaseStudy } from "@/data/site";

export default function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="font-mono text-xs text-muted">
        {String(index + 1).padStart(2, "0")} · {study.org}
      </p>
      <h3 className="mt-3 font-serif text-2xl">
        {study.title}
        {study.href && (
          <a href={study.href} target="_blank" rel="noopener noreferrer" className="ml-2 text-accent">
            ↗
          </a>
        )}
      </h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted marker:text-line">
        {study.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <ul className="mt-auto flex flex-wrap gap-2 pt-6">
        {study.stack.map((t) => (
          <li key={t} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
