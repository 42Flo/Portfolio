import HTMLIcon from '@/components/shared/icons/HTMLIcon';
import CSSIcon from '@/components/shared/icons/CSSIcon';
import SASSIcon from '@/components/shared/icons/SASSIcon';
import JSIcon from '@/components/shared/icons/JSIcon';
import TSIcon from '@/components/shared/icons/TSIcon';
import ReactIcon from '@/components/shared/icons/ReactIcon';
import NextJsIcon from '@/components/shared/icons/NextJsIcon';
import NodeJsIcon from '@/components/shared/icons/NodeJsIcon';
import MuiIcon from '@/components/shared/icons/MuiIcon';
import PythonIcon from '@/components/shared/icons/PythonIcon';
import PostgresqlIcon from '@/components/shared/icons/PostgresqlIcon';
import MongoDBIcon from '@/components/shared/icons/MongoDBIcon';
import GitIcon from '@/components/shared/icons/GitIcon';
import DockerIcon from '@/components/shared/icons/DockerIcon';
import FigmaIcon from '@/components/shared/icons/FigmaIcon';
import style from '@/style/modules/skillsCarousel.module.css';


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
        {/* Duplicate slides for seamless loop */}
        {skillsIcons.map((icon, idx) => (
          <div key={`first-${idx}`} className={style.slide}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  )
}
