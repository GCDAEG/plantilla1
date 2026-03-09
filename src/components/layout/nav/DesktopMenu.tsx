import { NavSection } from "@/lib/sections";
import { cn } from "@/lib/utils";
import { Gavel } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import Lenis from "lenis";
import { useLenis } from "lenis/react";
import { CgGym } from "react-icons/cg";
import { SlPeople } from "react-icons/sl";

interface DesktopMenuProps {
  sections: NavSection[];
  activeSection: string | null;
  scrollToSection: (id: string) => void;
  isScrolled: boolean;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  sections,
  activeSection,
  isScrolled,
}) => {
  const lenis = useLenis();
  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  return (
    <motion.div
      className={cn(
        "w-full mx-auto h-full px-5 md:px-6 lg:px-28 hidden items-center justify-between md:flex absolute z-50 ",
        !isScrolled && "bg-linear-to-b from-black/20",
      )}
    >
      {/* Logo */}
      {/* <Link
        href="/"
        className={`font-bold text-lg flex items-center gap-2 ${isScrolled ? "text-foreground" : "text-white"}`}
      >
        <div className="border-2 aspect-square size-8 flex">
          <Gavel className={`size-full `} strokeWidth={2} />
        </div>
        <p className="text-2xl">LAW</p>
      </Link> */}
      <div className="flex justify-center">
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
          <p className="text-xl font-bold">GYM</p>
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
      </div>
      {/* Links */}
      <ul className="hidden md:flex gap-6">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              onClick={(e) => {
                e.preventDefault();
                lenis?.scrollTo(`#${s.id}`, {
                  offset: -80,
                  duration: 1.2,
                });
              }}
              className={cn(
                "text-lg transition-colors hover:text-primary",
                isScrolled ? "" : "text-white",
                activeSection === s.id && "text-primary border-b",
              )}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="h-full flex items-center ">
        <SlPeople className="size-7" />
      </div>
    </motion.div>
  );
};

export default DesktopMenu;
