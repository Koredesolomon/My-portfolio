import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      className="tone-light relative isolate flex min-h-[100svh] w-full flex-col justify-between overflow-hidden pb-10 pt-24"
      aria-label="Introduction"
    >
      {/* Giant outlined ghost word */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden pt-[24svh] md:pt-[22svh]">
        <div className="w-full px-[8%] md:px-0">
          <span
            className="rise -ml-[0.04em] block md:ml-0 md:text-center font-[family-name:var(--font-ghost)] text-[22vw] font-extrabold uppercase leading-[0.82] tracking-tighter md:text-[17vw] md:leading-none"
            style={{
              color: "var(--bg)",
              WebkitTextStroke: "3px rgba(13,13,13,0.09)",
              paintOrder: "stroke fill",
              animationDelay: "100ms",
            }}
          >
            <span className="block md:inline">KORE</span>
            <span className="block md:inline">KODES</span>
          </span>
        </div>
      </div>

      {/* Top tag */}
      <div className="rise flex w-full items-center justify-between px-[8%]" style={{ animationDelay: "50ms" }}>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">00 — Personal Portfolio</p>
        <p className="hidden items-center gap-2 font-mono text-xs text-muted sm:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          Available for new projects
        </p>
      </div>

      {/* Bottom content */}
      <div className="mt-auto w-full px-[8%] pt-16">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8 lg:col-span-7">
            <h1
              className="rise text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
              style={{ animationDelay: "250ms" }}
            >
              Software{" "}
              <span className="font-serif font-normal italic text-muted">Developer.</span>
            </h1>
            <p
              className="rise mt-4 max-w-lg text-sm leading-relaxed text-fg/80 sm:text-base md:text-lg"
              style={{ animationDelay: "380ms" }}
            >
              {site.intro}
            </p>
          </div>

          <div
            className="rise flex flex-wrap items-center gap-2 md:col-span-4 md:justify-end lg:col-span-5"
            style={{ animationDelay: "500ms" }}
          >
            <a
              href="#work"
              className="inline-flex rounded-full bg-fg px-5 py-3 text-xs text-bg transition-all hover:-translate-y-0.5 hover:shadow-lg sm:text-sm"
            >
              Explore work
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-full border border-fg/30 px-5 py-3 text-xs transition-all hover:-translate-y-0.5 hover:border-fg sm:text-sm"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
