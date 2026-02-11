import { base, title, titleH2 } from "@/app/page";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/StraggerContainer";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import React from "react";

interface ExercisesProps {}

const exercises = [
  {
    id: "0",
    title: "Fuerza",
    description: "Levantamiento de pesas",
    image: "/generic1.jpg",
  },
  {
    id: "1",
    title: "Cardio",
    description: "Indoor cycling",
    image: "/generic2.avif",
  },
  {
    id: "2",
    title: "Fuerza",
    description: "Kettlebell power",
    image: "/generic3.avif",
  },
  {
    id: "3",
    title: "Cardio",
    description: "Indoor cycling",
    image: "/generic4.avif",
  },
  {
    id: "4",
    title: "Entrenamiento",
    description: "Indoor cycling",
    image: "/generic5.jpg",
  },
];

const Exercises: React.FC<ExercisesProps> = ({}) => {
  return (
    <Section id="features" size="content">
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
        <FadeIn className="w-full flex flex-col justify-center items-center">
          <h3 className={`${titleH2} text-3xl text-primary`}>Ejercicios</h3>
          <h2 className={`${titleH2} text-5xl`}>Adaptados a ti</h2>
        </FadeIn>

        {/* Contenedor de las cards */}
        <div
          className="
            w-full
            flex flex-wrap gap-6
          "
        >
          {exercises.map((exercise) => (
            <FadeIn
              key={exercise.id}
              className="
               flex flex-col group space-y-3 bg-card 
              grow
              basis-full               
              md:basis-[calc(50%-1rem)] 
              lg:basis-[calc(33.333%-1rem)] 
              aspect-square
            "
            >
              <div className="flex-1 flex flex-col overflow-hidden group">
                <div className="size-full group-hover:scale-105 transition-all">
                  <ResponsiveImage
                    src={exercise.image}
                    alt="generica 1"
                    fit="cover"
                    className="size-full"
                  />
                </div>
                <div className="p-3 relative before:absolute before:border-t-4 before:border-primary before:top-0 before:left-0 before:h-96 before:w-[700] before:inset-0 before:bg-card before:rotate-2 before:origin-top-right">
                  <div className="w-full h-full relative z-50 bg-card">
                    <p
                      className={`${title} uppercase text-lg font-bold text-primary`}
                    >
                      {exercise.title}
                    </p>
                    <h3 className={`${title} text-3xl font-bold`}>
                      {exercise.description}
                    </h3>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Repetir el <div> anterior para cada card que quieras */}
          {/* Todas idénticas en cuanto a clases de layout */}
          {/* ... */}
        </div>
      </StaggerContainer>
    </Section>
  );
};

export default Exercises;
