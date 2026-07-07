import { faqs } from "../data";

export default function FAQ() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 font-display text-5xl uppercase tracking-tighter md:text-6xl">
          Preguntas <span className="text-primary">Frecuentes</span>
        </h2>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                <span className="font-display text-xl uppercase tracking-tight md:text-2xl">
                  {q}
                </span>
                <span className="font-mono text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
