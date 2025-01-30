import HTMLIcon from '@/components/icons/HTMLIcon';
import CSSIcon from '@/components/icons/CSSIcon';
import SASSIcon from '@/components/icons/SASSIcon';
import JSIcon from '@/components/icons/JSIcon';
import TSIcon from '@/components/icons/TSIcon';
import ReactIcon from '@/components/icons/ReactIcon';
import NextJsIcon from '@/components/icons/NextJsIcon';
import NodeJsIcon from '@/components/icons/NodeJsIcon';
import MuiIcon from '@/components/icons/MuiIcon';
import PythonIcon from '@/components/icons/PythonIcon';
import PostgresqlIcon from '@/components/icons/PostgresqlIcon';
import MongoDBIcon from '@/components/icons/MongoDBIcon';
import GitIcon from '@/components/icons/GitIcon';
import DockerIcon from '@/components/icons/DockerIcon';
import FigmaIcon from '@/components/icons/FigmaIcon';
import style from '@/style/modules/skillsCarousel.module.scss';


const skillsIcons = [
  <HTMLIcon />,
  <CSSIcon />,
  <SASSIcon />,
  <JSIcon />,
  <TSIcon />,
  <ReactIcon />,
  <NextJsIcon />,
  <NodeJsIcon />,
  <MuiIcon />,
  <PythonIcon />,
  <PostgresqlIcon />,
  <MongoDBIcon />,
  <GitIcon />,
  <DockerIcon />,
  <FigmaIcon />
]

export default function SkillsCarousel() {

  return (
    <div className={style.slider}>
      <div className={style.sliderTrack}>
        {skillsIcons.map((icon, idx) => (
          <div key={`first-${idx}`} className={style.slide}>
            {icon}
          </div>
        ))}
        {skillsIcons.map((icon, idx) => (
          <div key={`second-${idx}`} className={style.slide}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  )
}
