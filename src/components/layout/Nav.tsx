"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { sections } from "@/lib/sections";
import { useWindowScroll } from "react-use";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import DesktopMenu from "./nav/DesktopMenu";
import MobileMenu from "./nav/MobileMenu";

export function NavBar() {
  const ref = useRef<HTMLElement>(null);
  const { y } = useWindowScroll();
  const isScrolled = y >= 70;

  /* ---------------------------------------------
     Scroll to section
  --------------------------------------------- */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
  };
  /* ---------------------------------------------
     Sección activa (limpio)
  --------------------------------------------- */
  const activeSection = useScrollSpy(sections.map((s) => s.id));

  return (
    <motion.nav
      layout
      ref={ref}
      className={cn(
        "sticky top-0 z-50 w-full transition-all bg-sidebar h-20 shadow-sm",
        isScrolled ? "shadow-sm" : "",
      )}
    >
      <DesktopMenu
        activeSection={activeSection}
        isScrolled
        scrollToSection={scrollToSection}
        sections={sections}
      />
      <MobileMenu
        activeSection={activeSection}
        isScrolled
        scrollToSection={scrollToSection}
        sections={sections}
      />
    </motion.nav>
  );
}
