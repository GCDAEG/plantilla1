import { base, title, titleH2 } from "@/app/page";
import { Section } from "@/components/layout/Section";
import React from "react";
// Si tenés tailwind variables para colores, ajustalas; acá uso clases estándar
// Asumimos que bg-primary es naranja o similar al botón del ejemplo

const HeroCallToAction: React.FC = () => {
  return (
    <Section id="join-now" size="content">
      {" "}
      {/* size="full" para que ocupe todo el ancho */}
      <div
        className="
          relative  
          bg-cover bg-center bg-no-repeat
          flex items-center justify-center
          text-center text-white
          overflow-hidden
          w-full
        "
        // Imagen de fondo (usa una URL real o importa local)
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`,
          // O usa tu propia imagen: url('/images/gym-woman-kettlebell.jpg')
        }}
      >
        {/* Overlay oscuro para legibilidad del texto */}
        <div className="absolute inset-0 bg-black/60" />{" "}
        {/* 60% opacity negro */}
        {/* Contenido principal */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-12 py-20 md:py-32">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg ${title}`}
          >
            REGISTRATE AHORA
          </h2>
          <p
            className={`text-xl md:text-2xl lg:text-3xl font-medium mb-10 drop-shadow-md max-w-3xl mx-auto ${titleH2}`}
          >
            PARA OBTENER MÁS OFERTAS Y BENEFICIOS
          </p>

          <p
            className={`text-lg md:text-xl lg:text-2xl mb-12 opacity-90 max-w-4xl mx-auto ${base}`}
          >
            DONDE SALUD, BELLEZA Y FITNESS SE ENCUENTRAN.
          </p>

          {/* Botón CTA principal */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="#registro" // o tu ruta real de registro / contacto
              className="
                inline-flex items-center justify-center
                px-5 py-2 text-xl md:text-xl font-bold
                rounded-lg bg-primary
                text-white shadow-lg hover:shadow-xl
                transition-all duration-300 transform hover:-translate-y-1
                focus:outline-none focus:ring-4 focus:ring-orange-500/50
              "
            >
              AGENDAR CITA
            </a>

            {/* Botón secundario opcional */}
            <a
              href="#mas-info"
              className="
                inline-flex items-center justify-center
                px-5 py-2 text-xl md:text-xl font-semibold
                rounded-lg border-2 border-white/70 text-white
                hover:bg-white/10 transition-all duration-300
              "
            >
              CONOCER MÁS
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroCallToAction;
