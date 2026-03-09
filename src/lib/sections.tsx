export type NavSection = {
  id: string;
  label: string;
  href?: string;
};

export const sections: NavSection[] = [
  { id: "hero", label: "Inicio" },
  {
    id: "features",
    label: "Características",
  },
  { id: "exercices", label: "Ejercicios" },
  { id: "steps", label: "Pasos" },
  { id: "faq", label: "Preguntas" },
];
