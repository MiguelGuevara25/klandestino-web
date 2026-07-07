import { wspUrl } from "../data";
import Wsp from "../assets/svg/Wsp";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md">
      <a
        href="#top"
        className="font-display text-2xl tracking-tighter text-primary"
      >
        KLANDESTINO
      </a>
      <div className="hidden gap-8 text-[10px] font-bold uppercase tracking-[0.2em] md:flex">
        <a href="#horarios" className="transition-colors hover:text-primary">
          Horarios
        </a>
        <a href="#dojo" className="transition-colors hover:text-primary">
          El Dojo
        </a>
        <a href="#galeria" className="transition-colors hover:text-primary">
          Galería
        </a>
        <a href="#logros" className="transition-colors hover:text-primary">
          Logros
        </a>
        <a href="#contacto" className="border-b border-primary text-primary">
          Prueba Gratis
        </a>
      </div>

      <a
        href={wspUrl}
        target="_blank"
        rel="noreferrer"
        className="md:hidden text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-primary-foreground bg-accent px-5 py-2"
      >
        <Wsp />
        Whatsapp
      </a>
    </nav>
  );
}
