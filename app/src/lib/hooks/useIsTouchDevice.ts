import { useEffect, useState } from 'react';

function hasTouchSupport() {
  return (
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
    ('ontouchstart' in window) ||
    window.matchMedia('(any-pointer: coarse)').matches
  );
}

export default function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(hasTouchSupport());
  }, []);

  return isTouch;
}
