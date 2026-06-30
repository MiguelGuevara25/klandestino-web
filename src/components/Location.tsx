import BookingDialog from "./BookingDialog";

export default function Location() {
  const ADDRESS =
    "Sector II Grupo 10 Mz H Lote 10, Villa el Salvador, Lima, Perú";
  const MAPS_QUERY = encodeURIComponent(ADDRESS);
  const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
  const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

  return (
    <section
      id="contacto"
      className="bg-primary px-6 py-24 text-primary-foreground"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div>
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-primary-foreground/70">
            Contacto
          </span>
          <h2 className="mb-8 font-display text-5xl uppercase leading-none italic tracking-tighter md:text-6xl">
            Encuéntranos en el corazón de VES
          </h2>
          <address className="not-italic mb-10">
            <p className="mb-2 text-2xl font-bold">
              Sector II Grupo 10 Mz H Lote 10
            </p>
            <p className="text-primary-foreground/80">
              Villa el Salvador, Lima, Perú
            </p>
          </address>
          <div className="flex flex-col gap-4">
            <BookingDialog variant="dark">Reserva tu Clase de Prueba</BookingDialog>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="text-center text-xs uppercase tracking-[0.25em] text-primary-foreground/70 hover:text-primary-foreground"
            >
              Cómo llegar — abrir en Google Maps ↗
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden border border-white/20 bg-black/20">
          <iframe
            title="Ubicación de Klandestino Jiu Jitsu"
            src={MAPS_EMBED}
            loading="lazy"
            className="block aspect-square w-full grayscale contrast-125"
            style={{
              filter:
                "grayscale(1) invert(0.92) hue-rotate(180deg) contrast(0.9)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
