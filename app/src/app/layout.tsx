import type { Metadata } from "next";
import "@/style/globals.scss";
import classNames from "classnames";
import { FontCarterOne, FontChakraPetch, FontInter } from "@/style/fonts/fonts";
import Header from "@/components/Header";
import Flashlight from '@/components/shared/Flashlight';


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html id="top" lang="en">
      <body className={classNames(FontInter.variable, FontCarterOne.variable, FontChakraPetch.variable)}>
        <Header />
        <Flashlight />
        {children}
      </body>
    </html>
  );
}
