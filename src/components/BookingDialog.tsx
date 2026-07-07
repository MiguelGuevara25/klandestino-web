"use client";

import { useMemo, useState } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormState, Program } from "../interface";
import Field from "./ui/Field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { wspNumber } from "../data";

const SLOTS: Record<
  Program,
  { value: string; label: string; days: number[] }[]
> = {
  kids: [
    { value: "5:00 PM — 6:30 PM", label: "5:00 PM — 6:30 PM", days: [1, 3, 5] },
  ],
  adults: [
    {
      value: "7:00 PM — 8:30 PM",
      label: "Turno A · 7:00 PM — 8:30 PM",
      days: [1, 2, 3, 4, 5],
    },
    {
      value: "8:30 PM — 10:00 PM",
      label: "Turno B · 8:30 PM — 10:00 PM",
      days: [1, 2, 3, 4, 5],
    },
  ],
};

const INITIAL: FormState = {
  name: "",
  phone: "",
  program: "adults",
  slot: "",
  date: undefined,
  notes: "",
};

export default function BookingDialog({
  children,
  variant = "primary",
}: {
  children?: React.ReactNode;
  variant?: "primary" | "outline" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const availableSlots = useMemo(() => SLOTS[form.program], [form.program]);
  const allowedDays = useMemo(
    () => new Set(availableSlots.flatMap((s) => s.days)),
    [availableSlots],
  );

  const schema = z.object({
    name: z
      .string()
      .trim()
      .min(2, "Ingresa tu nombre completo")
      .max(80, "Máximo 80 caracteres"),
    phone: z
      .string()
      .trim()
      .regex(/^[0-9+\s-]{7,20}$/, "Ingresa un número de teléfono válido"),
    program: z.enum(["kids", "adults"]),
    slot: z.string().min(1, "Selecciona un horario"),
    date: z.date({ message: "Selecciona una fecha" }),
    notes: z.string().trim().max(300, "Máximo 300 caracteres").optional(),
  });

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => {
      const { [key]: _omit, ...rest } = e;
      return rest;
    });
  };

  const handleProgramChange = (p: Program) => {
    setForm((f) => ({ ...f, program: p, slot: "", date: undefined }));
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0];
        if (typeof k === "string" && !fieldErrors[k])
          fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    const d = parsed.data;
    const fechaTxt = format(d.date, "EEEE d 'de' MMMM, yyyy", { locale: es });
    const programaTxt = d.program === "kids" ? "Kids (Niños)" : "Adultos";
    const lines = [
      "Hola Klandestino 👊",
      "Quiero reservar una clase de prueba:",
      "",
      `• Nombre: ${d.name}`,
      `• Teléfono: ${d.phone}`,
      `• Programa: ${programaTxt}`,
      `• Horario: ${d.slot}`,
      `• Fecha: ${fechaTxt}`,
    ];
    if (d.notes) lines.push(`• Nota: ${d.notes}`);
    const url = `https://wa.me/${wspNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    
    setSubmitting(false);
    setOpen(false);
    setForm(INITIAL);
  };

  const triggerCls =
    variant === "outline"
      ? "border border-foreground/20 px-10 py-4 font-bold uppercase tracking-[0.2em] transition-all hover:border-foreground"
      : variant === "dark"
        ? "bg-black px-8 py-5 text-center font-bold uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-black/85"
        : "bg-primary px-10 py-4 font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/85";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={triggerCls}>
        {children ?? "Reserva Clase de Prueba"}
      </DialogTrigger>
      <DialogContent className="max-w-2xl border-border bg-surface text-foreground sm:rounded-none">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl uppercase tracking-tight">
            Reserva tu <span className="text-primary">clase de prueba</span>
          </DialogTitle>
          <DialogDescription className="text-muted">
            Te confirmamos por WhatsApp en menos de 10 minutos. Primera clase
            gratis.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <Field label="Nombre completo" error={errors.name}>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              maxLength={80}
              autoComplete="name"
              className="w-full border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              placeholder="Ej: Diego Ramírez"
            />
          </Field>

          <Field label="WhatsApp / Teléfono" error={errors.phone}>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              maxLength={20}
              autoComplete="tel"
              className="w-full border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              placeholder="Ej: +51 987 654 321"
            />
          </Field>

          <Field label="Programa">
            <div className="grid grid-cols-2 gap-px bg-border">
              {(["adults", "kids"] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => handleProgramChange(p)}
                  className={cn(
                    "bg-background py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors",
                    form.program === p
                      ? "bg-primary text-primary-foreground"
                      : "hover:text-primary",
                  )}
                >
                  {p === "adults" ? "Adultos" : "Kids"}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Horario" error={errors.slot}>
            <div className="space-y-2">
              {availableSlots.map((s) => (
                <label
                  key={s.value}
                  className={cn(
                    "flex cursor-pointer items-center justify-between border px-3 py-2.5 text-sm transition-colors",
                    form.slot === s.value
                      ? "border-primary text-foreground"
                      : "border-border text-muted hover:text-foreground",
                  )}
                >
                  <span>{s.label}</span>
                  <input
                    type="radio"
                    name="slot"
                    value={s.value}
                    checked={form.slot === s.value}
                    onChange={() => update("slot", s.value)}
                    className="accent-primary"
                  />
                </label>
              ))}
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                {form.program === "kids"
                  ? "Solo Lun · Mié · Vie"
                  : "Lunes a Viernes"}
              </p>
            </div>
          </Field>

          <Field label="Fecha tentativa" error={errors.date}>
            <Popover>
              <PopoverTrigger
                type="button"
                className={cn(
                  "flex w-full items-center justify-between border border-border bg-background px-3 py-2.5 text-left text-sm outline-none hover:border-primary",
                  !form.date && "text-muted",
                )}
              >
                {form.date
                  ? format(form.date, "EEEE d 'de' MMMM, yyyy", { locale: es })
                  : "Selecciona un día"}
                <CalendarIcon className="h-4 w-4 text-primary" />
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-auto border-border bg-surface p-0"
              >
                <Calendar
                  mode="single"
                  selected={form.date}
                  onSelect={(d) => update("date", d)}
                  locale={es}
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    if (date < today) return true;
                    return !allowedDays.has(date.getDay());
                  }}
                  className={cn("pointer-events-auto p-3")}
                />
              </PopoverContent>
            </Popover>
          </Field>

          <Field label="Mensaje (opcional)" error={errors.notes}>
            <textarea
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              maxLength={300}
              rows={3}
              className="w-full resize-none border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              placeholder="¿Algo que debamos saber? (experiencia previa, lesiones, etc.)"
            />
          </Field>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary px-8 py-4 font-bold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-50"
          >
            {submitting ? "Enviando..." : "Enviar por WhatsApp"}
          </button>
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-muted">
            Te abriremos WhatsApp con tu reserva lista para enviar
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
