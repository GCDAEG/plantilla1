// app/page.tsx (o tu página principal)
"use client";

import { useRef } from "react";

import { FloatingCTA } from "@/components/ui/FloatingCTA";

import FAQS from "@/components/layout/sections/FAQs";
import HeroSection from "@/components/layout/sections/HeroSection";
import FeatureSection from "@/components/layout/sections/FeatureSection";
import StepsSection from "@/components/layout/sections/Plan";
import Exercises from "../components/layout/sections/Exercises";
import CallToAction from "../components/layout/sections/CallToAction";
import LocationInfo from "../components/layout/sections/LocationInfo";

export default function HomePage() {
  const ctaRef = useRef<HTMLDivElement>(null);

  return (
    <main className={`min-h-screen w-full  `}>
      {/* Hero / Header full viewport */}
      <HeroSection />

      <FeatureSection />
      <Exercises />

      <CallToAction />
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
