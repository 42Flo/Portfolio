'use client'
import { useEffect, useState } from "react";
import style from '@/style/modules/flashlight.module.scss';
import classNames from 'classnames';

export default function Flashlight() {
  const [mousePos, setMousePos] = useState<{x: number, y: number} | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.classList.add('hide-cursor');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('hide-cursor');
    };
  }, []);

  return (
    <div
      className={classNames(style.flashlight)}
      style={mousePos ? {
        background: `
          radial-gradient(
            circle 5vmin at ${mousePos.x}px ${mousePos.y}px,
            var(--flashlight-color),
            rgba(0, 0, 0, 0.1) 70%
          )
        `
      } : {}}
    />
  );
};
