export default function Gallery() {
  return (
    <section id="galeria" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Galería
            </span>
            <h2 className="font-display text-5xl uppercase tracking-tighter md:text-6xl">
              Fotos del <span className="text-primary">Tatami</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Instantes reales de clases, sparring y competencias. Sin filtros, sin pose.
          </p>
        </div>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-px bg-border md:auto-rows-[220px] md:grid-cols-4">
          {/* {photos.map((p, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden bg-background ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <figcaption className="pointer-events-none absolute bottom-0 left-0 m-3 border border-white/30 bg-black/60 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur">
                {p.tag}
              </figcaption>
            </figure>
          ))} */}
        </div>
        <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          ¿Quieres aparecer aquí? Te esperamos en el tatami.
        </p>
      </div>
    </section>
  )
}
