import trainingImg from "../assets/philosophy.jpg";
import Image from "next/image";

export default function Philosophy() {
  return (
    <div>
      <section id="dojo" className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Image
              src={trainingImg}
              alt="Dos atletas entrenando jiu jitsu sobre tatami oscuro"
              loading="lazy"
              width={1280}
              height={832}
              className="aspect-video w-full object-cover contrast-125 grayscale"
            />
          </div>
          <div className="md:col-span-5">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Filosofía
            </span>
            <h2 className="mb-6 font-display text-4xl uppercase md:text-5xl">
              Filosofía de la <span className="text-primary">Calle</span>
            </h2>
            <p className="mb-8 text-pretty leading-relaxed text-muted">
              El Jiu Jitsu no es solo una técnica de sumisión; es el lenguaje de
              la resistencia. En Klandestino respetamos la tradición del Bushido
              aplicada a la realidad urbana de Villa El Salvador. El tatami es
              donde el ego muere y nace la disciplina.
            </p>
            <ul className="space-y-4 border-l-2 border-primary pl-6">
              <li>
                <span className="block text-xs font-bold uppercase tracking-[0.25em]">
                  Respeto
                </span>
                <span className="text-muted">
                  Honor al oponente y al tatami.
                </span>
              </li>
              <li>
                <span className="block text-xs font-bold uppercase tracking-[0.25em]">
                  Lealtad
                </span>
                <span className="text-muted">
                  Formamos una familia, no clientes.
                </span>
              </li>
              <li>
                <span className="block text-xs font-bold uppercase tracking-[0.25em]">
                  Violencia Controlada
                </span>
                <span className="text-muted">
                  Disciplina mental sobre el caos.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
