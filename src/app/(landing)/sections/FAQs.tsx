"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StaggerContainer } from "../../../components/motion/StraggerContainer";
import { FadeIn } from "../../../components/motion/FadeIn";
import { base, title } from "@/app/page";
import { Section } from "@/components/layout/Section";

const FAQS = ({}) => {
  return (
    <Section id="faq">
      <StaggerContainer
        className={`max-w-7xl min-h-5xl w-full flex items-center flex-col justify-center text-center space-y-12 ${base}`}
      >
        <div></div>
      </StaggerContainer>
    </Section>
  );
};

export default FAQS;
