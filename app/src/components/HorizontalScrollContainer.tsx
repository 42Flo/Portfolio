'use client'
import React, { ReactNode, useCallback, useRef, useState } from 'react';
import style from '@/style/modules/horizontalScrollContainer.module.scss';
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon';
import classNames from 'classnames';

interface Props {
  children: ReactNode;
}

export default function HorizontalScrollContainer({ children }: Props) {
  const childrenContainerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const childrenContainerCallbackRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      childrenContainerRef.current = node;
      if (node.scrollWidth == 0 && node.offsetWidth == 0) {
        return;
      }
      setShowRightButton(node.scrollWidth > node.offsetWidth)
    }
  }, []);

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    if (!el) return;

    const isAtLeft = el.scrollLeft <= 0;
    const isAtRight = el.scrollLeft + el.offsetWidth >= el.scrollWidth - 1;

    setShowLeftButton(!isAtLeft);
    setShowRightButton(!isAtRight);
  }

  function handleButtonScroll(direction: 'left' | 'right') {
    const childrenContainer = childrenContainerRef.current;
    if (childrenContainer) {
      const scrollWidth = childrenContainer.offsetWidth;
      const currentScroll = childrenContainer.scrollLeft;
      const newScrollPosition = direction === 'right' ? currentScroll + scrollWidth : currentScroll - scrollWidth;
      childrenContainer.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
    }
  }

  return (
    <div className={style.horizontalScrollContainer}>
      {showLeftButton && <div
        className={classNames(style.navigationButtonWrapper, 'clickable')}
        onClick={() => handleButtonScroll('left')}
      >
        <ChevronLeftIcon/>
      </div>}
      <div ref={childrenContainerCallbackRef} className={style.childrenContainer} onScroll={handleScroll}>
        {children}
      </div>
      {showRightButton && <div
        className={classNames(style.navigationButtonWrapper, 'clickable')}
        onClick={() => handleButtonScroll('right')}
      >
        <ChevronLeftIcon/>
      </div>}
    </div>
  )
}
