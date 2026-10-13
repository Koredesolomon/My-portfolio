import CopyEmail from "./CopyEmail";
import { site } from "@/data/site";

function Letters({ text, from = Infinity }: { text: string; from?: number }) {
  return (
    <div className="flex flex-wrap">
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className={`inline-block cursor-default transition-all duration-200 hover:-translate-y-4 hover:text-muted ${
            i >= from ? "font-serif font-normal italic text-muted" : ""
          }`}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </div>
  );
}

export default function Contact() {
  return (
    <footer id="contact" className="tone-light scroll-mt-16 border-t border-line">
      <div className="px-[8%] pt-20">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">07 — Direct Dispatch</p>

        <h2 className="mb-16 mt-8 select-none text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <Letters text="Let's build" />
          <div className="mt-1">
            <Letters text="something together." from={10} />
          </div>
        </h2>

        <div className="grid items-center gap-12 border-b border-line pb-20 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">Primary inquiry inbox</p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${site.email}`}
                  className="border-b-2 border-fg/20 pb-1.5 text-2xl font-bold tracking-tight transition-colors hover:border-fg sm:text-4xl"
                >
                  {site.email}
                </a>
                <CopyEmail email={site.email} />
              </div>
            </div>
            <p className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs sm:text-sm">
              {site.socials.map((s, i) => (
                <span key={s.href} className="flex items-center gap-6">
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-muted">
                    {s.label} ↗
                  </a>
                  {i < site.socials.length - 1 && <span className="text-fg/20">/</span>}
                </span>
              ))}
            </p>
          </div>

          <div className="flex justify-start lg:col-span-4 lg:justify-end">
            <div className="relative flex h-36 w-36 items-center justify-center">
              <svg viewBox="0 0 100 100" className="spin-slow h-full w-full" aria-hidden>
                <path id="badgePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="fill-fg font-mono text-[9px] uppercase tracking-[0.22em]">
                  <textPath href="#badgePath" textLength="226" lengthAdjust="spacing">✦ SAY HELLO ✦ GET IN TOUCH ✦ </textPath>
                </text>
              </svg>
              <span className="absolute flex h-4 w-4 items-center justify-center rounded-full bg-fg font-mono text-[8px] text-bg">
                ✦
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 font-mono text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Built with Next.js &amp; Tailwind</span>
            <a href="#top" className="text-fg underline">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
