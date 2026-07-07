import { pillars } from "../data";

export default function Pillars() {
  return (
    <section className="border-y border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-5xl uppercase tracking-tighter md:text-6xl">
            Lo que <span className="text-primary">Entrenamos</span>
          </h2>
          <span className="max-w-md text-sm text-muted">
            Cuatro pilares que estructuran cada clase, sin importar tu nivel.
          </span>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ n, t, d }) => (
            <div
              key={n}
              className="group relative bg-background p-8 transition-colors hover:bg-surface"
            >
              <div className="mb-6 font-mono text-xs text-primary">{n}</div>
              <h3 className="mb-3 font-display text-2xl uppercase">{t}</h3>
              <p className="text-sm leading-relaxed text-muted">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
