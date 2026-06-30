export default function Testimonials() {
  const items = [
    {
      q: "Llegué buscando un gimnasio y encontré una familia. Las clases son técnicas, intensas y siempre con respeto.",
      n: "Diego R.",
      r: "Cinturón azul · 2 años",
    },
    {
      q: "Mi hijo entró tímido y ahora es seguro de sí mismo. La clase de kids cambió su vida.",
      n: "Carla M.",
      r: "Mamá de alumno kids",
    },
    {
      q: "El nivel técnico es real. He rolado en varias academias de Lima y Klandestino te exige a otro nivel.",
      n: "Jhonatan P.",
      r: "Cinturón morado · 4 años",
    },
  ];

  return (
    <section
      id="testimonios"
      className="border-y border-border bg-surface px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 font-display text-5xl uppercase tracking-tighter md:text-6xl">
          Voces del <span className="text-primary">Tatami</span>
        </h2>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.n}
              className="flex flex-col justify-between bg-background p-8"
            >
              <blockquote className="mb-8 text-pretty leading-relaxed">
                <span className="mr-1 font-display text-3xl text-primary">
                  &quot;
                </span>
                {t.q}
              </blockquote>
              <figcaption>
                <div className="font-bold uppercase tracking-wide">{t.n}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted">
                  {t.r}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
