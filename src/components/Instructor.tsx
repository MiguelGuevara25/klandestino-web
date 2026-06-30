import beltImg from "../assets/instructor.jpg";
import Image from "next/image";

export default function Instructor() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
            Cinturones
          </span>
          <h2 className="mb-6 font-display text-4xl uppercase md:text-5xl">
            El camino del <span className="text-primary">guerrero</span>
          </h2>
          <p className="mb-8 text-pretty leading-relaxed text-muted">
            En Brazilian Jiu Jitsu el cinturón no se compra, se gana en horas de
            tatami. Cada graduación es un reflejo del compromiso, no del
            talento. Aquí no regalamos cinturones: los forjamos.
          </p>
          <div className="grid grid-cols-5 gap-1">
            {[
              { c: "#F5F2ED", t: "Blanca" },
              { c: "#1f6feb", t: "Azul" },
              { c: "#7c3aed", t: "Morada" },
              { c: "#7a4a25", t: "Marrón" },
              { c: "#0A0A0A", t: "Negra" },
            ].map((b) => (
              <div key={b.t} className="text-center">
                <div
                  className="h-3 w-full border border-border"
                  style={{ backgroundColor: b.c }}
                />
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted">
                  {b.t}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-7 md:order-first">
          <Image
            src={beltImg}
            alt="Cinturón negro de jiu jitsu sobre un gi blanco"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-4/5 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
