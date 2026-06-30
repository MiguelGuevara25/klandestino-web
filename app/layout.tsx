import type { Metadata } from "next";
import "./globals.css";
import { Anton, Space_Grotesk, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Klandestino Jiu Jitsu — Dojo en Villa El Salvador, Lima",
  description:
    "Academia de Jiu Jitsu Brasileño en Villa El Salvador. Clases para kids y adultos. Disciplina, técnica y hermandad sobre el tatami. Reserva tu clase de prueba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("h-full", "antialiased", anton.variable, spaceGrotesk.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
