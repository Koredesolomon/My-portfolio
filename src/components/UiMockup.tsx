import type { Mockup } from "@/data/site";

const delay = (n: number) => ({ animationDelay: `${150 + n * 90}ms` });

function Bar({ w, className = "" }: { w: string; className?: string }) {
  return <i className={`block h-1.5 rounded-full bg-fg/10 ${className}`} style={{ width: w }} />;
}

export default function UiMockup({ mockup }: { mockup: Mockup }) {
  if (mockup.kind === "steps") {
    return (
      <div className="flex h-full flex-col p-4">
        <p className="rise font-mono text-[9px] uppercase tracking-wider text-accent" style={delay(0)}>
          Your learning loop
        </p>
        <p className="rise mt-1 text-sm font-bold leading-snug" style={delay(1)}>
          {mockup.title}
        </p>
        <ol className="mt-4 grid flex-1 content-start gap-2">
          {mockup.steps.map((step, i) => (
            <li
              key={step}
              className="rise flex items-center gap-3 rounded-xl border border-line bg-card px-3 py-2"
              style={delay(i + 2)}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 font-mono text-[10px] ${
                  i % 2 ? "border-accent text-accent" : "border-fg text-fg"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-xs font-semibold">{step}</span>
              <Bar w="24%" className="ml-auto" />
            </li>
          ))}
        </ol>
        <div className="rise mt-3 flex justify-between border-t border-line pt-2 font-mono text-[9px] uppercase tracking-wider text-muted" style={delay(8)}>
          {mockup.footer.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
      </div>
    );
  }

  const center = mockup.layout === "center";
  return (
    <div className="flex h-full flex-col">
      <div className="rise flex items-center justify-between border-b border-line px-4 py-2.5" style={delay(0)}>
        <span className="h-3 w-3 rounded-sm bg-fg" />
        <span className="flex gap-3 font-mono text-[9px] text-muted">
          {mockup.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </span>
      </div>

      <div className={`flex flex-1 gap-4 p-4 ${center ? "flex-col items-center justify-center text-center" : "items-center"}`}>
        <div className={`min-w-0 ${center ? "" : "flex-1"}`}>
          <p className="rise text-lg font-bold leading-tight tracking-tight" style={delay(1)}>
            {mockup.headline}
          </p>
          <p className="rise mt-1.5 text-[11px] text-muted" style={delay(2)}>
            {mockup.sub}
          </p>
          <span
            className="rise mt-3 inline-block rounded-full bg-fg px-3 py-1.5 font-mono text-[9px] text-bg"
            style={delay(3)}
          >
            {mockup.cta} →
          </span>
        </div>
        {!center && (
          <div className="rise h-24 w-2/5 shrink-0 rounded-xl border border-line bg-gradient-to-br from-accent/20 to-transparent" style={delay(3)} />
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 p-4 pt-0">
        {mockup.cards.map((c, i) => (
          <div key={c} className="rise rounded-lg border border-line bg-card p-2.5" style={delay(i + 4)}>
            <span className="mb-2 block h-5 w-5 rounded-md bg-accent/20" />
            <p className="text-[10px] font-semibold">{c}</p>
            <Bar w="70%" className="mt-1.5" />
            <Bar w="45%" className="mt-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
