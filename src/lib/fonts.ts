import { Roboto, Oswald, Bebas_Neue } from "next/font/google";



export const roboto = Roboto({
   variable: "--font-roboto",
});
export const oswald = Oswald({
  subsets: ["latin"],
variable: "--font-title-oswald",
});
export const bebasNue = Bebas_Neue({
  variable: "--font-bebas_nue",
  weight: "400",
});