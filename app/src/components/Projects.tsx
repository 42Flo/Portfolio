import style from "@/style/modules/projects.module.scss";
import ProjectBox from '@/components/shared/ProjectBox';

import aicoleDashboardImage from '../../public/projects/aicole/aicoleDashboard.png';
import aicoleLessonListImage from '../../public/projects/aicole/aicoleLessonList.png';

import troiEventsImage from '../../public/projects/troi/troiEvents.png';

import poneyLandingImage from '../../public/projects/poneyFM/poneyLanding.png';
import poneyArtistsImage from '../../public/projects/poneyFM/poneyArtist.png';
import poneyMagImage from '../../public/projects/poneyFM/poneyMag.png';
import poneyResidencyImage from '../../public/projects/poneyFM/poneyResidency.png';

import bdLandingImage from '../../public/projects/binaryDeconstruction/bdLanding.png';
import bdTotemsImage from '../../public/projects/binaryDeconstruction/bdTotems.png';

import mosaicPreparation from '../../public/projects/mosaic/mosaicPreparation.png';
import mosaicRobotArm from '../../public/projects/mosaic/mosaicRobotArm.png';
import mosaicResult from '../../public/projects/mosaic/mosaicResult.png';
import mosaicRobotControl from '../../public/projects/mosaic/mosaicRobotControl.jpeg';

import bosphorusImage from '../../public/projects/bosphorus/bosphorus.png';

import drCatalinLandingImage from '../../public/projects/drCatalin/drCatalingLanding.png';
import drCatalinDoctorImage from '../../public/projects/drCatalin/drCatalinDoctor.png';

export default function Projects() {
  return (
    <section id="projects" className={style.projects}>
      <h1>Projects</h1>
      <div className={style.projectsGrid}>
        <ProjectBox
          title='Aicole'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          images={[aicoleDashboardImage, aicoleLessonListImage]}
          url={'https://aicole.io'}
        />
        <ProjectBox
          title='Troi'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          images={[troiEventsImage]}
          url={'https://tickets.trommelmusic.com'}
        />
        <ProjectBox
          title='Poney.FM'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          images={[poneyMagImage, poneyResidencyImage, poneyArtistsImage, poneyLandingImage]}
          url={'https://www.poney.fm'}
        />
        <ProjectBox
          title='Binary Deconstruction'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          images={[bdLandingImage, bdTotemsImage]}
          url={'https://in-dialog.com/Projects/BinaryDeconstruction'}
        />
        <ProjectBox
          title='Mosaic'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          images={[mosaicRobotArm, mosaicPreparation, mosaicResult]}
        />
        <ProjectBox
          title='Bosphorus'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          images={[bosphorusImage]}
        />
        <ProjectBox
          title='Dr Catalin'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          images={[drCatalinLandingImage, drCatalinDoctorImage]}
        />
      </div>
    </section>
  )
}
