export default function Achievements() {
  const wins = [
    { y: "2024", t: "Copa Lima Open", r: "3 medallas de oro · 2 de plata" },
    { y: "2024", t: "Sudamericano IBJJF", r: "Bronce categoría adulto azul" },
    { y: "2023", t: "Copa Perú No-Gi", r: "Equipo subcampeón general" },
    { y: "2023", t: "Torneo Interbarrios VES", r: "Campeones por equipos" },
    { y: "2022", t: "Open Lima Sur", r: "Oro absoluto masculino" },
  ];
  return (
    <section
      id="logros"
      className="border-y border-border bg-surface px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-5xl uppercase tracking-tighter md:text-6xl">
            Logros del <span className="text-primary">Dojo</span>
          </h2>
          <span className="max-w-md text-sm text-muted">
            Cada medalla representa horas de tatami. El podio no se regala: se
            conquista.
          </span>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-4">
          {[
            { k: "30+", v: "Medallas de oro" },
            { k: "12", v: "Torneos disputados" },
            { k: "5", v: "Campeones nacionales" },
            { k: "100%", v: "Corazón klandestino" },
          ].map((s) => (
            <div key={s.v} className="bg-background px-6 py-10 text-center">
              <div className="font-display text-5xl text-primary">{s.k}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted">
                {s.v}
              </div>
            </div>
          ))}
        </div>

        <ol className="mt-10 divide-y divide-border border-y border-border">
          {wins.map((w) => (
            <li
              key={w.t}
              className="grid grid-cols-12 items-baseline gap-4 py-6 transition-colors hover:bg-background"
            >
              <span className="col-span-2 font-mono text-xs text-primary md:text-sm">
                {w.y}
              </span>
              <span className="col-span-10 font-display text-xl uppercase tracking-tight md:col-span-5 md:text-2xl">
                {w.t}
              </span>
              <span className="col-span-12 text-sm text-muted md:col-span-5 md:text-right">
                {w.r}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
