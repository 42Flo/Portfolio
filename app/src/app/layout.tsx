import type { Metadata } from "next";
import "@/style/globals.scss";

import React from 'react';
import RootLayout from '@/components/RootLayout';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';


export const metadata: Metadata = {
  title: "Florian REGULIER GAYET",
  description: "Full Stack Developer and System Architect ",
  authors: [{ name: "Florian REGULIER GAYET "}],
};

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html id={'top'} lang={'en'} translate={'no'}>
      <RootLayout>
        {children}
      </RootLayout>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
