import { ReactNode } from 'react';
import style from '@/style/modules/iconButton.module.scss';

interface Props {
  children?: ReactNode;
  path?: string;
}

export default function IconButton({ children, path }: Props) {
  if (path) {
    return (
      <a href={path} target={'_blank'} className={style.iconButton}>
        {children}
      </a>
    )
  }
  return (
    <button className={style.iconButton}>
      {children}
    </button>
  )
}
