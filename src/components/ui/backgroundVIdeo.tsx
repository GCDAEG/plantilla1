// components/ui/BackgroundVideo.tsx
import { ReactNode } from "react";
import { Section } from "../layout/Section";

interface BackgroundVideoProps {
  /**
   * URL del video (puede ser local en /public o externa)
   * Ej: "/videos/hero.mp4" o "https://..."
   */
  src: string;
  /**
   * Formato alternativo (recomendado: webm)
   */
  webmSrc?: string;
  /**
   * Overlay de color/opacidad (por defecto negro semitransparente)
   */
  overlay?: "none" | "dark" | "gradient" | ReactNode;
  /**
   * Clases adicionales para el contenedor principal
   */
  className?: string;
  /**
   * Contenido que va encima del video
   */
  children: ReactNode;
  /**
   * Altura mínima del componente (por defecto full screen)
   */
  minHeight?: string;
  /**
   * Posición del video (center por defecto)
   */
  objectPosition?: string;
  /**
   * Poster image (fallback cuando el video no carga)
   */
  poster?: string;
  id?: string;
}

/**
 * Componente reutilizable de video de fondo con overlay y contenido encima
 */
export default function BackgroundVideo({
  src,
  webmSrc,
  overlay = "dark",
  className = "",
  children,
  minHeight = "min-h-screen",
  objectPosition = "center",
  poster,
  id,
}: BackgroundVideoProps) {
  const overlayContent =
    overlay === "none" ? null : overlay === "gradient" ? (
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black/60 pointer-events-none" />
    ) : overlay === "dark" ? (
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
    ) : (
      overlay
    );

  return (
    <Section
      className={`relative w-full overflow-hidden ${minHeight} ${className} `}
      id={id}
    >
      <div className="bg-linear-to-b from-black/80 to-transparent inset-0 z-1 absolute top-0 left-0 w-full h-full"></div>
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        className="absolute inset-0 h-full w-screen object-cover"
        style={{ objectPosition }}
      >
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>

      {/* Overlay */}
      {overlayContent}

      {/* Contenido principal (encima del video) */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </Section>
  );
}
