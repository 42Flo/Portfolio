import { Inter, Carter_One, Chakra_Petch } from "next/font/google";

export const FontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const FontCarterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-carter-one",
});

export const FontChakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra-petch"
});
