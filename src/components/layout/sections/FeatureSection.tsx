import React from "react";
import { StaggerContainer } from "../../motion/StraggerContainer";
import { FadeIn } from "../../motion/FadeIn";
import { Section } from "@/components/layout/Section";
import { TbTreadmill } from "react-icons/tb";
import { Heart } from "lucide-react";
import { CgGym } from "react-icons/cg";
import { IoNutrition } from "react-icons/io5";

// interface FeatureSectionProps {}
const features: { id: string; title: string; text: string; icon?: any }[] = [
  {
    id: "1",
    title: "Modern equipment",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
    icon: <TbTreadmill className="size-full"></TbTreadmill>,
  },
  {
    id: "2",
    title: "Proffesponal training plan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
    icon: <CgGym className="size-full"></CgGym>,
  },
  {
    id: "3",
    title: "Unique to your needs",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",

    icon: <Heart className="size-full"></Heart>,
  },
  {
    id: "4",
    title: "Healthy nutrition plan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
    icon: <IoNutrition className="size-full"></IoNutrition>,
  },
];
const FeatureSection = ({}) => {
  return (
    <Section id="features" height="content">
      <StaggerContainer
        className="
      mx-auto w-full max-w-7xl
      px-4 md:px-6 lg:px-28
      flex flex-col items-center
      gap-16 md:gap-20
      text-foreground
      py-24
    "
      >
        <FadeIn className="w-full flex flex-col justify-center items-center gap-2">
          <h3 className={` text-3xl text-primary`}>¿Por que elegirnos?</h3>
          <h2 className={` text-5xl`}>Supera tus limites</h2>
        </FadeIn>
        <div className="w-full h-full grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FadeIn
              key={feature.id}
              className="p-2 flex flex-col group space-y-3"
            >
              <div className="w-full flex justify-center items-center ">
                <div className="w-20 p-4 bg-card text-primary rounded-full transition-all group-hover:text-primary-foreground group-hover:bg-primary">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1 flex flex-col space-y-3 items-center">
                <h4>{feature.title}</h4>
                <p className={` text-center text-sm`}>{feature.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </StaggerContainer>
    </Section>
  );
};

export default FeatureSection;
