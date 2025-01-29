import { ReactNode } from 'react';
import style from '@/style/modules/iconButton.module.scss';
import classNames from 'classnames';

interface Props {
  children?: ReactNode;
  path?: string;
}

export default function IconButton({ children, path }: Props) {
  if (path) {
    return (
      <a href={path} target={'_blank'} className={classNames(style.iconButton, 'clickable')}>
        {children}
      </a>
    )
  }
  return (
    <button className={classNames(style.iconButton, 'clickable')}>
      {children}
    </button>
  )
}
