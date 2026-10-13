"use client";

import { useEffect, useRef, useState } from "react";
import type { TimelineEntry } from "@/data/site";

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const start = rect.top - window.innerHeight * 0.7;
      setProgress(Math.min(1, Math.max(0, -start / rect.height)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl">
      <div aria-hidden className="absolute bottom-12 left-4 top-3 w-0.5 -translate-x-1/2 bg-line sm:left-8" />
      <div
        aria-hidden
        className="absolute left-4 top-3 w-0.5 -translate-x-1/2 bg-fg transition-[height] duration-150 ease-out sm:left-8"
        style={{ height: `${progress * 100}%`, maxHeight: "98%" }}
      />

      <div className="relative z-10 space-y-10">
        {entries.map((e, i) => {
          const lit = i === 0 ? progress > 0.03 : progress >= (i / (entries.length + 1)) * 0.9;
          return (
            <div key={e.title + e.years} className="relative pl-12 sm:pl-20">
              <span
                aria-hidden
                className={`absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 transition-all duration-300 sm:left-8 ${
                  lit ? "scale-110 border-fg bg-fg" : "scale-90 border-fg/30 bg-bg"
                }`}
              />
              <article
                className={`rounded-3xl border border-line bg-card p-6 transition-all duration-500 sm:p-8 ${
                  lit ? "translate-y-0 opacity-100 shadow-md" : "translate-y-3 opacity-60"
                }`}
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold">{e.years}</span>
                  <span className="rounded-full border border-line bg-bg px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted">
                    {e.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{e.title}</h3>
                <p className="mb-4 mt-1 flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
                  <span className="font-medium text-fg">{e.org}</span>
                  <span>·</span>
                  <span>{e.place}</span>
                  {e.href && (
                    <>
                      <span>·</span>
                      <a href={e.href} target="_blank" rel="noopener noreferrer" className="text-fg underline">
                        link ↗
                      </a>
                    </>
                  )}
                </p>
                <ul className="space-y-2 text-xs leading-relaxed sm:text-sm">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-0.5 font-bold">•</span>
                      <span className="text-fg/80">{b}</span>
                    </li>
                  ))}
                </ul>
                {e.metric && (
                  <p className="mt-4 flex items-center gap-2 border-t border-line pt-3 font-mono text-[11px] font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Key Metric: {e.metric}
                  </p>
                )}
              </article>
            </div>
          );
        })}

        <div className="relative pl-12 sm:pl-20">
          <span
            aria-hidden
            className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-dashed border-fg bg-bg sm:left-8"
          />
          <div className="flex flex-col items-center rounded-3xl border-2 border-dashed border-fg/30 bg-card/60 p-8 text-center">
            <span className="font-mono text-xs uppercase tracking-wider text-muted">Future horizon</span>
            <h3 className="text-2xl font-bold tracking-tight">Next — Your team?</h3>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-fg/80 sm:text-sm">
              Open to frontend and WordPress / headless CMS roles, contracts and freelance projects.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex rounded-full bg-fg px-6 py-2.5 text-xs text-bg transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
