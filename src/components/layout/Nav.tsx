"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../ui/Logo";
import { ThemeToggle } from "../theme-toggle";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import { HomeIcon } from "lucide-react";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { GrSteps } from "react-icons/gr";
import { BsPeople, BsQuestion } from "react-icons/bs";
import Image from "next/image";
import { CgGym } from "react-icons/cg";
import { Button } from "../ui/button";
import { FaPeopleLine } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { SlPeople } from "react-icons/sl";
import { title } from "@/app/page";

const sections = [
  { id: "hero", label: "Inicio", icon: <HomeIcon /> },
  {
    id: "features",
    label: "Características",
    icon: <MdOutlineFeaturedPlayList />,
  },
  { id: "steps", label: "Pasos", icon: <GrSteps /> },
  { id: "faq", label: "Preguntas", icon: <BsQuestion /> },
];

const NAVBAR_HEIGHT = 56;

export function SectionNavbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const ref = useRef<HTMLDivElement>(null);

  // 👉 scroll suave teniendo en cuenta el navbar
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${ref.current.offsetHeight}px`,
        );
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // 👉 detectar sección visible (más estable)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.4, 0.6],
      },
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isScrolled = activeSection !== "hero";

  return (
    <motion.div
      ref={ref}
      animate={{
        backgroundColor: isScrolled ? "rgba(2,6,23,0.85)" : "rgba(2,6,23,0.0)",
        boxShadow: isScrolled ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
      }}
      className={` top-0 left-0 z-60 min-w-full fixed ${title} `}
    >
      <motion.div
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="px-6 md:px-6 lg:px-36 h-20 flex justify-between items-center"
      >
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 items-center relative text-foreground">
          {sections.map((sec) => (
            <li
              key={sec.id}
              className={`relative ${activeSection === sec.id ? "text-red-500" : "text-foreground"}`}
            >
              <button
                onClick={() => scrollToSection(sec.id)}
                className="text-xl font-medium"
              >
                {sec.label}
              </button>

              {activeSection === sec.id && (
                <motion.span
                  layoutId="nav-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger
            className="
      md:hidden
      inline-flex items-center justify-center
      rounded-md p-2
      text-foreground
      transition-colors
      hover:bg-muted
      focus:outline-none focus:ring-2 focus:ring-ring
      
    "
          >
            <FaBars className="size-9" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="
      z-70 md:hidden
      bg-card text-foreground
      flex flex-col
      pt-10
    "
          >
            {/* Navegación */}
            <ul className="flex flex-col gap-2 mt-6 px-6">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      className={cn(
                        `
                  w-full flex items-center gap-3
                  rounded-md px-3 py-2
                  text-base
                  transition-colors
                  hover:bg-muted
                `,
                        activeSection === sec.id &&
                          "bg-muted text-accent font-semibold",
                      )}
                    >
                      <span className="text-lg">{sec.icon}</span>
                      <span>{sec.label}</span>
                    </button>
                  </SheetClose>
                </li>
              ))}
            </ul>

            {/* Logo */}
            <div className="mt-auto flex justify-center pb-8">
              <div className="relative aspect-square w-32 opacity-80">
                <Image
                  src="/g312.png"
                  alt="TUWEBHOY"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
        {/* Logo */}
        <div className="flex justify-center  w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key="logo"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex gap-3 items-center"
            >
              <div className="size-10">
                <CgGym className="size-full" />
              </div>
            </motion.div>
            {/* {isScrolled && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex gap-3 items-center"
              >
                <div className="size-10">
                  <CgGym className="size-full" />
                </div>
              </motion.div>
            )} */}
          </AnimatePresence>
        </div>
        <div className="h-full flex items-center ">
          <SlPeople className="size-full" />
        </div>
      </motion.div>
    </motion.div>
  );
}
