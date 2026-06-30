import BookingDialog from "./BookingDialog";

export default function Schedule() {
  return (
    <section
      id="horarios"
      className="border-y border-border bg-surface px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-5xl uppercase tracking-tighter md:text-6xl">
            Horarios de <span className="text-primary">Guerra</span>
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Sector II / VES / Lima
          </span>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-2">
          <article className="bg-background p-10">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="font-display text-3xl uppercase text-primary">
                Kids (Niños)
              </h3>
              <span className="border border-primary/30 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                5 — 12 años
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <span className="font-bold">Lunes · Miércoles · Viernes</span>
                <span className="text-muted">5:00 PM — 6:30 PM</span>
              </div>
              <p className="text-sm text-muted">
                Enfoque en disciplina, coordinación, valores y defensa personal
                básica. Un espacio seguro donde los niños crecen fuertes y
                respetuosos.
              </p>
            </div>
          </article>

          <article className="bg-background p-10">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="font-display text-3xl uppercase text-primary">
                Adultos
              </h3>
              <span className="border border-foreground/20 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                Lun a Vie
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <span className="font-bold">Turno A</span>
                <span className="text-muted">7:00 PM — 8:30 PM</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <span className="font-bold">Turno B</span>
                <span className="text-muted">8:30 PM — 10:00 PM</span>
              </div>
              <p className="text-sm text-muted">
                Fundamentos, técnica avanzada y sparring libre diario. Gi y
                No-Gi. Todos los niveles, desde blanca hasta cinturones de
                color.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-border p-6 md:flex-row">
          <p className="text-sm text-muted">
            ¿Primera vez? La primera clase de prueba es{" "}
            <span className="text-foreground">totalmente gratis</span>.
          </p>
          <BookingDialog>
            <span className="inline-block">Reservar Clase de Prueba</span>
          </BookingDialog>
        </div>
      </div>
    </section>
  );
}
