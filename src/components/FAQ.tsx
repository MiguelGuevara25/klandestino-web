export default function FAQ() {
  const faqs = [
    {
      q: "¿Necesito experiencia previa?",
      a: "Cero. La mayoría de nuestros alumnos empezaron desde cinturón blanco sin saber nada. Te enseñamos desde el primer paso.",
    },
    {
      q: "¿Qué necesito llevar a mi primera clase?",
      a: "Ropa deportiva cómoda, una botella de agua y ganas de aprender. Si tienes kimono (gi), perfecto; si no, te prestamos uno para la prueba.",
    },
    {
      q: "¿Cuánto cuesta la mensualidad?",
      a: "Manejamos planes accesibles para Kids y Adultos. Escríbenos por WhatsApp y te enviamos los precios actualizados al instante.",
    },
    {
      q: "¿Se entrena Gi y No-Gi?",
      a: "Sí. Alternamos clases con kimono y sin kimono para que tu juego sea completo en cualquier escenario.",
    },
    {
      q: "¿Puedo competir representando a Klandestino?",
      a: "Por supuesto. Tenemos equipo de competencia activo en torneos locales y nacionales. Si tienes hambre, te formamos.",
    },
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 font-display text-5xl uppercase tracking-tighter md:text-6xl">
          Preguntas <span className="text-primary">Frecuentes</span>
        </h2>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                <span className="font-display text-xl uppercase tracking-tight md:text-2xl">
                  {f.q}
                </span>
                <span className="font-mono text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
