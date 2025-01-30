import { ReactNode } from 'react';
import style from '@/style/modules/iconWrapper.module.scss';
import classNames from 'classnames';

interface Props {
  children?: ReactNode;
  path?: string;
}

export default function IconWrapper({ children, path }: Props) {
  if (path) {
    return (
      <a href={path} target={'_blank'} className={classNames(style.iconWrapper, 'clickable')}>
        {children}
      </a>
    )
  }
  return (
    <span className={style.iconWrapper}>
      {children}
    </span>
  )
}
