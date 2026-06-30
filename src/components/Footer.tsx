import { Calendar } from "lucide-react";
import Instagram from "../assets/svg/Instagram";
import Tiktok from "../assets/svg/Tiktok";
import Wsp from "../assets/svg/Wsp";

export default function Footer() {
  const WHATSAPP_URL =
    "https://wa.me/51900000000?text=Hola%20Klandestino%2C%20quiero%20reservar%20mi%20clase%20de%20prueba";

  return (
    <footer>
      <div className="flex flex-col items-center justify-between gap-6 border-t border-border px-6 py-12 md:flex-row">
        <div className="text-xs uppercase tracking-[0.3em] text-muted">
          Klandestino © 2026
        </div>
        <div className="flex gap-4">
          {[
            { l: <Instagram />, h: "https://instagram.com" },
            { l: <Tiktok />, h: "https://facebook.com" },
            { l: <Wsp />, h: WHATSAPP_URL },
          ].map((s) => (
            <a
              key={s.h}
              href={s.h}
              target="_blank"
              rel="noreferrer"
              className="flex size-10 items-center justify-center rounded-full border border-border text-[10px] font-bold transition-colors hover:border-primary hover:text-primary"
            >
              {s.l}
            </a>
          ))}
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          柔術 · Villa El Salvador · Perú
        </div>
      </div>

      <div className="bg-white text-black text-center">
        Creado por{" "}
        <a className="font-bold" target="_blank" href="https://encodev.site">
          Encodev
        </a>
      </div>
    </footer>
  );
}
