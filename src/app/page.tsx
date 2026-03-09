// app/page.tsx (o tu página principal)
"use client";

import { useRef } from "react";
import { FadeIn } from "@/components/motion/FadeIn"; // asumo que tienes Stagger si lo usas

import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { StaggerContainer } from "@/components/motion/StraggerContainer";
import { Bebas_Neue, Oswald, Roboto } from "next/font/google";
import { StepCard } from "@/components/ui/StepCard";

import { SimpleCTAButton } from "@/components/ui/CTAButton";
import FAQS from "@/components/layout/sections/FAQs";
import HeroSection from "@/components/layout/sections/HeroSection";
import FeatureSection from "@/components/layout/sections/FeatureSection";
import StepsSection from "@/components/layout/sections/Plan";
import { Section } from "@/components/layout/Section";
import Exercises from "../components/layout/sections/Exercises";
import HeroCallToAction from "../components/layout/sections/HeroCallToAction";
import LocationInfo from "../components/layout/sections/LocationInfo";

export default function HomePage() {
  const ctaRef = useRef<HTMLDivElement>(null);

  return (
    <main className={`min-h-screen w-full  `}>
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
