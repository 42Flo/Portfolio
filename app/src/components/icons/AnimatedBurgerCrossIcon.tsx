import style from '@/style/modules/animatedBurgerCrossIcon.module.scss';
import classNames from 'classnames';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  active?: boolean;
}

export default function AnimatedBurgerCrossIcon({ active, className, ...svgProps }: Props) {
  return (
    <svg
      className={classNames(style.burgerCrossIcon, active && style.active, className)}
      viewBox="0 0 100 100"
      {...svgProps}
    >
      <path
        className={classNames(style.lineTop, active && style.active)}
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
      />
      <path
        className={classNames(style.lineMiddle, active && style.active)}
        d="m 30,50 h 40"
      />
      <path
        className={classNames(style.lineBottom, active && style.active)}
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
      />
    </svg>
  )
}
