'use client'
import { useEffect, useState } from "react";
import style from '@/style/modules/flashlight.module.scss';

export default function Flashlight() {
  const [mousePos, setMousePos] = useState<{x: number, y: number} | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={style.flashlight}
      style={mousePos ? {
        background: `
          radial-gradient(
            circle 5vmin at ${mousePos.x}px ${mousePos.y}px,
            var(--light-neutral),
            rgba(0, 0, 0, 0.1) 70%
          )
        `
      } : {}}
    />
  );
};
