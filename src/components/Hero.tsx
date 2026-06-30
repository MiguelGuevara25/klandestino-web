import Image from "next/image";
import logoAsset from "../assets/klandestino-logo.png";
import BookingDialog from "./BookingDialog";
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display leading-none text-white/4 text-[40vw]">
          柔術
        </div>
      </div>

      <div className="z-10 flex max-w-4xl flex-col items-center text-center">
        <Image
          src={logoAsset}
          alt="Logo Klandestino Jiu Jitsu — calavera con bandana negra y kanjis rojos"
          width={400}
          height={400}
          className="mb-4 h-44 w-44 animate-entrance md:h-64 md:w-64"
        />
        <h1
          className="mb-6 animate-entrance text-balance font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-9xl"
          style={{ animationDelay: "100ms" }}
        >
          Disciplina <span className="text-primary">Klandestina</span>
        </h1>
        <p
          className="mb-10 max-w-xl animate-entrance text-pretty text-lg text-muted md:text-xl"
          style={{ animationDelay: "200ms" }}
        >
          Arte suave forjado en las calles de Villa El Salvador. No somos un
          gimnasio, somos una hermandad de combate.
        </p>
        <div
          className="flex animate-entrance flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "300ms" }}
        >
          <BookingDialog>Reserva Clase de Prueba</BookingDialog>
          <a
            href="#horarios"
            className="border border-foreground/20 px-10 py-4 font-bold uppercase tracking-[0.2em] transition-all hover:border-foreground"
          >
            Ver Horarios
          </a>
        </div>

        <div
          className="mt-20 grid w-full max-w-2xl animate-entrance grid-cols-3 gap-px overflow-hidden border border-border bg-border text-center"
          style={{ animationDelay: "500ms" }}
        >
          {[
            { k: "8+", v: "Años en el tatami" },
            { k: "120+", v: "Alumnos activos" },
            { k: "VES", v: "Hecho en V.E.S." },
          ].map((s) => (
            <div key={s.v} className="bg-background px-4 py-6">
              <div className="font-display text-3xl text-primary">{s.k}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
