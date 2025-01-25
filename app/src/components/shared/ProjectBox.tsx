import Image, { StaticImageData } from 'next/image';
import style from '@/style/modules/projectBox.module.scss';
import HorizontalScrollContainer from '@/components/shared/HorizontalScrollContainer';
import ArrowUpRightSquareIcon from '@/components/shared/icons/ArrowUpRightSquareIcon';

interface Props {
  title: string;
  description: string;
  images: StaticImageData[];
  url?: string;
}

export default function ProjectBox({ title, description, images, url }: Props) {
  return (
    <div className={style.projectBox}>
      <HorizontalScrollContainer>
        {images.map((img, i) => (
          <div key={i} className={style.imageWrapper}>
            <Image src={img} alt={`project-image ${i}`}/>
          </div>
        ))}
      </HorizontalScrollContainer>
      <div className={style.titleDescription}>
        {url !== undefined ? <a  href={url} target={'_blank'}>
          <h4>
            {title}
            <ArrowUpRightSquareIcon />
          </h4>
        </a> : <h4>{title}</h4>}
        <p>{description}</p>
      </div>
    </div>
  )
}
