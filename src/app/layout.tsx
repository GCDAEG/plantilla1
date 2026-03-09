import type { Metadata } from "next";

import "./globals.css";
import { FooterSection } from "@/components/layout/Footer";
import { NavBar } from "@/components/layout/Nav";
import ReactLenis from "lenis/react";
import { bebasNue, oswald, roboto } from "@/lib/fonts";

const metadata: Metadata = {
  title: {
    default: "Tu Web Hoy - Páginas web rápidas y accesibles",
    template: "%s | Tu Web Hoy",
  },
  description:
    "Páginas web simples, modernas y económicas para negocios. Entrega rápida, precio accesible.",
  keywords: [
    "páginas web",
    "sitios web rápidos",
    "landing pages",
    "desarrollo web Argentina",
  ],
  openGraph: {
    title: "Tu Web Hoy",
    description: "Tu sitio web profesional listo en días",
    url: "https://tudominio.com",
    siteName: "Tu Web Hoy",
    images: ["/og-image.jpg"], // agrega tu imagen OG
  },
};

// app/layout.tsx (versión recomendada)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`
          min-h-screen antialiased text-foreground bg-fixed
          overflow-x-hidden bg-gradient-main
          min-w-screen
          ${bebasNue.variable}
          ${roboto.variable}
          ${oswald.variable}
        `}
      >
        {/* Opcional: capa extra para overlay si quieres más control */}
        <ReactLenis root>
          <NavBar />
          {children}
          <FooterSection />
        </ReactLenis>
      </body>
    </html>
  );
}
