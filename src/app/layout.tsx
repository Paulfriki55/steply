import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "STEPLY - Centro de Terapia de Lenguaje y Acompañamiento Psicológico",
  description: "Evaluamos, diagnosticamos y acompañamos tu proceso paso a paso. Terapia de lenguaje y acompañamiento psicológico para todas las edades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
