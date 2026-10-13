"use client";

import { useState } from "react";
import type { Project } from "@/data/site";
import UiMockup from "./UiMockup";

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function ProjectAccordion({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 lg:h-[36rem] lg:flex-row">
      {projects.map((p, i) => {
        const open = i === active;
        return (
          <div
            key={p.href}
            className={`relative overflow-hidden rounded-[2rem] border border-line bg-card transition-[flex-basis,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              open ? "shadow-xl lg:flex-1" : "lg:flex-none lg:basis-16 xl:basis-[4.5rem]"
            }`}
          >
            {open ? (
              <article className="inspect grid h-full gap-8 p-6 sm:p-8 md:grid-cols-[1fr_1fr] lg:min-w-[34rem]">
                <div className="flex flex-col">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    {pad(i)} — {p.category}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl">{p.title}</h3>
                  <p className="mt-3 font-mono text-xs text-muted">
                    {p.role} · {p.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-fg/80 sm:text-base">{p.description}</p>
                  <ul className="mt-5 space-y-1.5 text-sm text-fg/80">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="text-muted">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto border-t border-line pt-5">
                    <ul className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t} className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-xs">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm text-bg transition-transform hover:-translate-y-0.5"
                    >
                      Visit Website <span aria-hidden>↗</span>
                    </a>
                  </div>
                </div>

                <div className="flex min-h-64 flex-col overflow-hidden rounded-2xl border border-line bg-bg">
                  <div className="flex items-center gap-3 border-b border-line px-4 py-3">
                    <span className="flex gap-1.5" aria-hidden>
                      <i className="h-2 w-2 rounded-full bg-fg/20" />
                      <i className="h-2 w-2 rounded-full bg-fg/20" />
                      <i className="h-2 w-2 rounded-full bg-fg/20" />
                    </span>
                    <span className="truncate font-mono text-[10px] uppercase tracking-wider text-muted">
                      {p.title} // ui-preview
                    </span>
                    <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase text-muted">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> Live
                    </span>
                  </div>
                  <div className="relative flex-1 overflow-hidden">
                    <UiMockup mockup={p.mockup} />
                  </div>
                  <p className="border-t border-line px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-muted">
                    {p.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  </p>
                </div>
              </article>
            ) : (
              <button
                onClick={() => setActive(i)}
                aria-expanded={false}
                aria-label={`Open ${p.title}`}
                className="group flex h-16 w-full items-center gap-4 px-6 text-left transition-colors hover:bg-bg lg:h-full lg:flex-col lg:justify-between lg:px-0 lg:py-7 lg:text-center"
              >
                <span className="font-mono text-sm text-muted lg:w-full">{pad(i)}</span>
                <span className="flex-1 truncate text-base font-bold tracking-tight lg:flex-none lg:[writing-mode:vertical-rl] lg:rotate-180 lg:text-lg">
                  {p.title}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-lg leading-none transition-all group-hover:border-fg group-hover:bg-fg group-hover:text-bg">
                  +
                </span>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
