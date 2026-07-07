import Instagram from "../assets/svg/Instagram";
import Tiktok from "../assets/svg/Tiktok";
import Wsp from "../assets/svg/Wsp";
import { wspUrl } from "../data";

export default function Footer() {
  const socialMedia = [
    { l: <Instagram />, h: "https://www.instagram.com/klandestinojj/" },
    { l: <Tiktok />, h: "https://www.tiktok.com/@klandestino.jiu.j" },
    { l: <Wsp />, h: wspUrl },
  ];

  return (
    <footer>
      <div className="flex flex-col items-center justify-between gap-6 border-t border-border px-6 py-12 md:flex-row">
        <div className="text-xs uppercase tracking-[0.3em] text-muted">
          Klandestino © 2026
        </div>
        <div className="flex gap-4">
          {socialMedia.map((s) => (
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
