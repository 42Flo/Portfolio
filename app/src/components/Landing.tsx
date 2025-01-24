'use client'
import style from "@/style/modules/landing.module.scss";
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Flashlight from '@/components/shared/Flashlight';

const fullText = 'Full Stack Developer and System Architect';

export default function Landing() {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    typewriter();
  }, []);

  function typewriter() {
    let text = '';
    let i = 0;

    const interval = setInterval(() => {
      if (i === fullText.length) {
        clearInterval(interval);
        return;
      }
      text += fullText.charAt(i);
      setDisplayedText(text);
      ++i;
    }, 60);
  }

  return (
    <section className={style.landing}>
      <h1 className={classNames(displayedText.length === fullText.length && style.animatedCaret)}>
        {displayedText}
      </h1>
    </section>
  );
}
