'use client'

import React from 'react';
import Header from '@/components/Header';
import Flashlight from '@/components/Flashlight';
import classNames from 'classnames';
import { FontCarterOne, FontChakraPetch, FontInter } from '@/style/fonts/fonts';
import useIsTouchDevice from '@/lib/hooks/useIsTouchDevice';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const isTouch = useIsTouchDevice();

  return (
    <body className={classNames(FontInter.variable, FontCarterOne.variable, FontChakraPetch.variable)}>
      <Header/>
      {!isTouch && <Flashlight/>}
      {children}
      <Footer />
    </body>
  )
}
