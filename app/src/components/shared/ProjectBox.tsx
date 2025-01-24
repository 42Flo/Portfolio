import Image, { StaticImageData } from 'next/image';
import style from '@/style/modules/projectBox.module.scss';

interface Props {
  title: string;
  description: string;
  images: StaticImageData[];
}

export default function ProjectBox({ title, description, images }: Props) {
  return (
    <div className={style.projectBox}>
      <Image src={images[0]} alt={'project-image'} />
      <div className={style.titleDescription}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}
