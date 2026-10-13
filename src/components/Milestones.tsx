"use client";

import { useEffect, useRef, useState } from "react";
import type { Milestone } from "@/data/site";

function CountUp({ value, start }: { value: string; start: boolean }) {
  const match = value.match(/^(\d+)(\D*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / 1400);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, target]);

  if (!match) return <>{value}</>;
  return (
    <>
      {n}
      {suffix}
    </>
  );
}

export default function Milestones({ items }: { items: Milestone[] }) {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      const t = trackRef.current;
      if (t) setDistance(Math.max(0, t.scrollWidth - window.innerWidth + 120));
    };
    const onScroll = () => {
      const c = containerRef.current;
      if (!c) return;
      const total = c.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      setProgress(Math.min(1, Math.max(0, -c.getBoundingClientRect().top / total)));
    };
    measure();
    onScroll();
    const t = setTimeout(measure, 300);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const current = Math.min(items.length, Math.floor(progress * (items.length + 1)) + 1);

  return (
    <section
      id="milestones"
      ref={containerRef}
      className="relative w-full border-t border-line"
      style={{ height: `calc(100svh + ${distance}px)` }}
      aria-label="Achievements gallery"
    >
      <div className="sticky top-0 flex h-[100svh] w-full flex-col justify-between overflow-hidden pb-8 pt-24 md:pb-10 md:pt-28">
        <div className="flex w-full items-end justify-between px-[8%]">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">06 — Milestones &amp; Impact</p>
            <h2 className="font-serif text-3xl tracking-tight sm:text-5xl">
              Verified <span className="italic text-muted">achievements.</span>
            </h2>
          </div>
          <div className="hidden text-right sm:block">
            <p className="font-mono text-xs text-muted">
              {String(current).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </p>
            <div className="mt-2 h-0.5 w-36 overflow-hidden rounded-full bg-line">
              <div className="h-full bg-fg" style={{ width: `${progress * 100}%` }} />
            </div>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
              {Math.round(progress * 100)}% complete
            </p>
          </div>
        </div>

        <div className="my-auto w-full overflow-hidden py-8">
          <div
            ref={trackRef}
            className="flex w-max gap-6 px-[8%] will-change-transform"
            style={{ transform: `translateX(${-progress * distance}px)` }}
          >
            {items.map((m, i) => (
              <article
                key={m.subtitle}
                className="flex h-[22rem] w-[78vw] shrink-0 flex-col justify-between rounded-3xl border border-line bg-card p-7 shadow-sm sm:w-96"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    {String(i + 1).padStart(2, "0")} · {m.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold tracking-tight">{m.subtitle}</h3>
                  <p className="mt-2 text-sm text-muted">{m.description}</p>
                  {m.href && (
                    <a href={m.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-accent">
                      View ↗
                    </a>
                  )}
                </div>
                <p className="font-serif text-7xl tracking-tight">
                  <CountUp value={m.value} start={progress >= (i / (items.length + 1)) * 0.7} />
                </p>
              </article>
            ))}
            <article className="flex h-[22rem] w-72 shrink-0 items-center justify-center rounded-3xl border-2 border-dashed border-fg/30 p-7 text-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Future milestones</p>
                <p className="mt-2 font-serif text-2xl italic">and counting →</p>
              </div>
            </article>
          </div>
        </div>

        <p className="w-full px-[8%] font-mono text-[10px] uppercase tracking-wider text-muted">
          Scroll vertically to navigate gallery.
        </p>
      </div>
    </section>
  );
}
