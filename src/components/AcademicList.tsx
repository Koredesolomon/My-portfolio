import type { Credential } from "@/data/site";

export default function AcademicList({ items }: { items: Credential[] }) {
  return (
    <div className="flex flex-col divide-y divide-line overflow-hidden rounded-3xl border border-line bg-card shadow-sm">
      {items.map((c, i) => {
        const Tag = c.href ? "a" : "div";
        const link = c.href ? { href: c.href, target: "_blank", rel: "noopener noreferrer" } : {};
        return (
          <Tag key={c.title} {...link} className="group relative block overflow-hidden p-6 sm:p-8">
            <span
              aria-hidden
              className="absolute inset-0 origin-left scale-x-0 bg-fg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
            />
            <div className="relative flex items-start justify-between gap-6">
              <div className="flex items-start gap-6 sm:gap-8">
                <span className="pt-0.5 font-mono text-sm font-semibold text-muted transition-colors group-hover:text-bg/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors group-hover:text-bg/70">
                    {c.source}
                  </p>
                  <h3 className="text-lg font-bold tracking-tight transition-colors group-hover:text-bg sm:text-xl">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-fg/80 transition-colors group-hover:text-bg/80 sm:text-sm">
                    {c.description}
                  </p>
                </div>
              </div>
              <span className="shrink-0 translate-x-2 pt-1 font-mono text-lg opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-bg group-hover:opacity-100">
                ↗
              </span>
            </div>
          </Tag>
        );
      })}
    </div>
  );
}
