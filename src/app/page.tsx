// app/page.tsx (o tu página principal)
"use client";

import { useRef } from "react";
import { FadeIn } from "@/components/motion/FadeIn"; // asumo que tienes Stagger si lo usas

import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { StaggerContainer } from "@/components/motion/StraggerContainer";
import { Bebas_Neue, Oswald, Roboto } from "next/font/google";
import { StepCard } from "@/components/ui/StepCard";

import { SimpleCTAButton } from "@/components/ui/CTAButton";
import FAQS from "@/app/(landing)/sections/FAQs";
import HeroSection from "@/app/(landing)/sections/HeroSection";
import FeatureSection from "@/app/(landing)/sections/FeatureSection";
import StepsSection from "@/app/(landing)/sections/Plan";
import { Section } from "@/components/layout/Section";
import Exercises from "./(landing)/sections/Exercises";
import HeroCallToAction from "./(landing)/sections/HeroCallToAction";
import LocationInfo from "./(landing)/sections/LocationInfo";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const oswald = Oswald({
  subsets: ["latin"],
  display: "optional",
});
const bebasNue = Bebas_Neue({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export const title = oswald.className;
export const titleH2 = bebasNue.className;
export const base = roboto.className;
export default function HomePage() {
  const ctaRef = useRef<HTMLDivElement>(null);

  return (
    <main className={`min-h-screen w-full ${base} `}>
      {/* Hero / Header full viewport */}
      <HeroSection />

      <FeatureSection />
      <Exercises />

      <HeroCallToAction />
      {/* STEPS */}
      <StepsSection />
      {/* FAQS */}
      <FAQS />
      {/* Floating elements (globales) */}
      <FloatingCTA targetRef={ctaRef} />
      {/* <FloatingWhatsAppButton /> ← si lo tienes global */}
      <LocationInfo />
    </main>
  );
}
