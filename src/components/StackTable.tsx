"use client";

import { useState } from "react";
import { categories, elements, type Category } from "@/data/stack";
import Reveal from "./Reveal";

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function StackTable() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [selected, setSelected] = useState(0);
  const current = elements[selected];

  return (
    <div>
      <Reveal>
        <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter stack by category">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-5 py-2 font-mono text-xs tracking-wider transition-all duration-300 ${
                filter === c
                  ? "border-fg bg-fg text-bg"
                  : "border-line bg-card text-muted hover:-translate-y-0.5 hover:border-fg hover:text-fg"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
        <Reveal>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 xl:grid-cols-5">
            {elements.map((el, i) => {
              const match = filter === "All" || el.category === filter;
              const active = i === selected;
              return (
                <button
                  key={el.symbol}
                  onClick={() => setSelected(i)}
                  aria-pressed={active}
                  aria-label={el.name}
                  style={{ animationDelay: `${i * 45}ms` }}
                  className={`tile relative aspect-square rounded-xl border bg-card p-3 text-left transition-all duration-300 ${
                    active ? "border-fg ring-1 ring-fg" : "border-line hover:-translate-y-1 hover:shadow-lg"
                  } ${match ? "" : "scale-95 opacity-30"}`}
                >
                  <span className="font-mono text-[10px] text-muted">{pad(i)}</span>
                  <span
                    className={`absolute right-3 top-3 h-1.5 w-1.5 rounded-full transition-colors ${
                      match ? "bg-accent" : "bg-line"
                    }`}
                  />
                  <span className="absolute inset-x-0 top-1/2 -translate-y-[60%] text-center font-mono text-2xl font-bold sm:text-3xl">
                    {el.symbol}
                  </span>
                  <span className="absolute inset-x-3 bottom-3 truncate font-mono text-[10px] text-muted sm:text-[11px]">
                    {el.name}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <aside className="h-fit rounded-3xl border border-line bg-card p-7 lg:sticky lg:top-24" aria-live="polite">
            <div className="flex items-center justify-between border-b border-line pb-4 font-mono text-[11px] uppercase tracking-wider text-muted">
              <span>Inspector</span>
              <span className="text-fg">
                № {pad(selected)} / {current.symbol.toUpperCase()}
              </span>
            </div>
            <div key={selected} className="inspect">
              <div className="mx-auto mt-6 flex aspect-square w-40 items-center justify-center rounded-2xl border border-line bg-bg">
                <span className="font-mono text-6xl font-bold">{current.symbol}</span>
              </div>
              <h3 className="mt-6 text-center font-serif text-2xl">{current.name}</h3>
              <p className="mx-auto mt-2 w-fit rounded-full bg-bg px-3 py-1 font-mono text-[11px] tracking-wider text-muted">
                {current.category}
              </p>
              <p className="mt-6 border-t border-line pt-5 text-sm text-muted">{current.description}</p>
              <p className="mt-6 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-wider text-muted">
                Implemented in:
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {current.usedIn.map((u) => (
                  <li key={u} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs">
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
