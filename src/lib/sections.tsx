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
  { id: "plans", label: "Planes" },
  { id: "faq", label: "Preguntas" },
];
