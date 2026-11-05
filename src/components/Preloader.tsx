"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HOT = "#ff5a36";
const HOLD_MS = 6800; // when the exit starts
const EXIT_MS = 900;

function Words({ text, start, hot = false }: { text: string; start: number; hot?: boolean }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span
          key={i}
          className="mword"
          style={{ transitionDelay: `${(start + i) * 190}ms`, color: hot ? HOT : undefined }}
        >
          {w}
          {" "}
        </span>
      ))}
    </>
  );
}

export default function Preloader() {
  const [active, setActive] = useState(true);
  const [shown, setShown] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.dataset.loading) {
      setActive(false);
      return;
    }
    const raf = requestAnimationFrame(() => setShown(true));
    const t = setTimeout(leave, HOLD_MS);

    function leave() {
      setExiting(true);
      root.dataset.leaving = "1";
      // let the hero animations start as the screen lifts
      setTimeout(() => delete root.dataset.loading, EXIT_MS * 0.35);
      setTimeout(() => {
        try {
          sessionStorage.setItem("preloaded", "1");
        } catch {}
        delete root.dataset.leaving;
        setActive(false);
      }, EXIT_MS + 100);
    }

    const skip = () => {
      clearTimeout(t);
      leave();
    };
    window.addEventListener("preloader-skip", skip, { once: true });
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      window.removeEventListener("preloader-skip", skip);
    };
  }, []);

  if (!active) return null;

  return (
    <div
      className={`preloader tone-light fixed inset-0 z-[100] overflow-hidden ${shown ? "in" : ""} ${exiting ? "exit" : ""}`}
      role="status"
      aria-label="Loading"
    >
      <div className="grid h-full md:grid-cols-[0.8fr_1.2fr] md:gap-[4vw]">
        <div className="manifesto-photo relative h-[55svh] md:h-auto">
          <div className="kenburns absolute inset-0">
            <Image
              src="/images/manifesto.jpg"
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start px-[8%] pt-6 md:justify-center md:pb-0 md:pl-0 md:pr-[8%] md:pt-0">
          <span className="mbar mb-8 block h-[5px] w-20 origin-left" style={{ background: HOT }} />
          <p className="mfade text-base text-muted sm:text-lg md:text-xl" style={{ transitionDelay: "400ms" }}>
            If you think the price of winning is too high,
          </p>
          <h2 className="mt-6 whitespace-nowrap text-[7vw] font-extrabold leading-[1.02] tracking-tight md:text-[4vw]">
            <span className="block">
              <Words text="wait till you get the" start={3} />
            </span>
            <span className="block">
              <Words text="bill for regret." start={8} hot />
            </span>
          </h2>
          <p className="mfade mt-8 text-base sm:text-lg" style={{ transitionDelay: "3600ms" }}>
            The bill for regret is generational
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-line">
        <div className="preloader-bar h-full" style={{ background: HOT }} />
      </div>
      <button
        onClick={() => window.dispatchEvent(new Event("preloader-skip"))}
        className="absolute bottom-6 right-[8%] font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-fg"
      >
        Skip ↓
      </button>
    </div>
  );
}
