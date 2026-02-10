import React from "react";
import { StaggerContainer } from "../../../components/motion/StraggerContainer";
import { FadeIn } from "../../../components/motion/FadeIn";
import { StepCard } from "../../../components/ui/StepCard";
import { SimpleCTAButton } from "../../../components/ui/CTAButton";
import { title, titleH2 } from "@/app/page";
import { Section } from "@/components/layout/Section";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";
// interface StepsSectionProps {

// }
const gymPlans: {
  id: number;
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
  popular: boolean;
  buttonText: string;
  highlighted: boolean;
}[] = [
  {
    id: 1,
    name: "Plan Básico",
    price: 24990,
    priceLabel: "/ mes",
    description: "Ideal para empezar o entrenar ocasionalmente",
    features: [
      "Acceso ilimitado al gimnasio",
      "Uso de todas las máquinas y pesos libres",
      "Vestuarios y duchas",
      "Acceso en horario reducido (6-22 hs)",
      "Sin costo de matrícula",
    ],
    popular: false,
    buttonText: "Elegir Básico",
    highlighted: false,
  },
  {
    id: 2,
    name: "Plan Full",
    price: 39990,
    priceLabel: "/ mes",
    description: "El más elegido: acceso completo + clases grupales",
    features: [
      "Acceso 24/7 al gimnasio",
      "Todas las máquinas + zona funcional",
      "Clases grupales ilimitadas (CrossFit, Yoga, Zumba, etc.)",
      "Asesoramiento básico de entrenadores",
      "Descuento 10% en suplementos de la tienda",
      "1 sesión mensual con nutricionista",
    ],
    popular: true, // ← para resaltar esta card
    buttonText: "Elegir Full",
    highlighted: true,
  },
  {
    id: 3,
    name: "Plan Premium",
    price: 59990,
    priceLabel: "/ mes",
    description: "Experiencia VIP: todo incluido + beneficios exclusivos",
    features: [
      "Acceso 24/7 + estacionamiento reservado",
      "Clases grupales + entrenamiento personalizado (2 sesiones/mes)",
      "Asesoramiento nutricional mensual",
      "Acceso a sauna y zona de recuperación",
      "Locker personal",
      "15% descuento en tienda y cafetería",
      "Invitado 1 vez al mes (traé un amigo)",
    ],
    popular: false,
    buttonText: "Elegir Premium",
    highlighted: false,
  },
];

const StepsSection = ({}) => {
  return (
    <Section id="steps" size="screen">
      <StaggerContainer
        className="
      mx-auto w-full max-w-7xl
      px-4 md:px-6 lg:px-32
      min-h-[calc(100vh-3.5rem)]
      flex flex-col items-center justify-center
      gap-16 md:gap-20
      text-foreground
      py-32
    "
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          {gymPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`relative p-12 md:p-5 rounded-2xl h-full shadow-xl`}
              // Reemplazo del hover con Framer Motion
              whileHover={{
                y: -8, // equivalente a -translate-y-2 (ajustado a px)
                scale: plan.highlighted ? 1.08 : 1.04, // leve escala + pronunciada en el destacado
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", // sombra más fuerte al hover
              }}
              transition={{
                type: "spring", // sensación más natural y "elástica"
                stiffness: 300,
                damping: 20,
              }}
            >
              <div
                className={`absolute top-0 left-0 h-full w-full inset-0 ${
                  plan.highlighted
                    ? "bg-linear-to-b from-red-500 to-red-800 text-white scale-105 md:scale-110 border-2 border-red-400"
                    : "bg-card border"
                }`}
              >
                {plan.popular && (
                  <div
                    className={`absolute w-full left-0 flex justify-center bg-yellow-400 text-gray-900 font-bold rounded-bl-lg text-2xl h-8 overflow-hidden ${title}`}
                  >
                    MÁS POPULAR
                  </div>
                )}
              </div>

              <div className="flex  flex-col gap-5 text-center relative z-10">
                <h3 className={`text-4xl md:text-5xl font-bold mb-2 ${title}`}>
                  {plan.name}
                </h3>
                <div className="flex justify-center items-end">
                  <p className="text-3xl md:text-4xl font-extrabold ">
                    {formatPrice(plan.price)}
                  </p>
                  <p className="text-lg md:text-lg font-extrabold ">
                    {plan.priceLabel}
                  </p>
                </div>
                <p className="text-sm md:text-base opacity-80 mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-400 text-sm h-full ">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`
                py-2 px-6 rounded-xl font-bold text-sm transition-all
                ${
                  plan.highlighted
                    ? "bg-white text-indigo-900 hover:bg-gray-100"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }
              `}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </StaggerContainer>
    </Section>
  );
};

export default StepsSection;
