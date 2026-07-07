import { testimonials } from "../data";

export default function Testimonials() {
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
          {testimonials.map(({ n, q, r }) => (
            <figure
              key={n}
              className="flex flex-col justify-between bg-background p-8"
            >
              <blockquote className="mb-8 text-pretty leading-relaxed">
                <span className="mr-1 font-display text-3xl text-primary">
                  &quot;
                </span>
                {q}
              </blockquote>
              <figcaption>
                <div className="font-bold uppercase tracking-wide">{n}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted">
                  {r}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
