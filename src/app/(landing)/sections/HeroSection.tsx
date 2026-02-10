import React from "react";
import { title, title as titleFont } from "@/app/page";
import Image from "next/image";
import { ArrowBigRight } from "lucide-react";
import { HeroCTAButton } from "../../../components/ui/CTAButton";
import Logo from "../../../components/ui/Logo";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { base } from "framer-motion/client";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import BackgroundVideo from "@/components/ui/backgroundVIdeo";
// interface HeroSectionProps {}

const HeroSection = ({}) => {
  return (
    <BackgroundVideo
      className={`flex items-end md:items-center min-h-screen lg:px-28`}
      id="hero"
      src="/videos/video1.mp4"
    >
      <div className="w-full mx-auto max-w-7xl px-6">
        <div className="flex h-full">
          <div className=" w-full h-full flex justify-end flex-col space-y-5 md:text-center pb-5 ">
            <h1
              className={`text-7xl lg:text-9xl ${title} font-bold w-full 2xl:text-9xl`}
            >
              Tu cuerpo puede más de lo que crees
            </h1>
            <p className={`${base} text-xl`}>
              Más fuerza. Más energía. Mejor versión de vos. Clase de prueba sin
              compromiso + plan 100% adaptado a ti.
            </p>
            <div className="w-full">
              <Button className="rounded-xs text-xl bg-primary h-12 w-52 text-foreground">
                Empezar
              </Button>
              {/* <Button className="rounded-xs bg-transparent h-12 w-32 text-foreground">
                Read more
              </Button> */}
            </div>
          </div>

          {/* <div className="absolute inset-0 -z-10 w-full h-full bg-[url('/heroimg.jpg')] bg-center bg-cover">
            <div className="absolute top-0 let-0 h-full w-full bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          </div> */}
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default HeroSection;
