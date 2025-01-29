import style from "@/style/modules/projects.module.scss";
import ProjectBox from '@/components/shared/ProjectBox';

import aicoleDashboardImage from '../../public/projects/aicole/aicoleDashboard.png';
import aicoleLessonListImage from '../../public/projects/aicole/aicoleLessonList.png';
import aicoleExercise from '../../public/projects/aicole/aicoleExercise.png';
import aicoleLesson from '../../public/projects/aicole/aicoleLesson.png';

import troiEventsImage from '../../public/projects/troi/troiEvents.png';
import troiArtistsImage from '../../public/projects/troi/troiArtists.png';
import troiMediaImage from '../../public/projects/troi/troiMedia.png';

import poneyLandingImage from '../../public/projects/poneyFM/poneyLanding.png';
import poneyArtistsImage from '../../public/projects/poneyFM/poneyArtist.png';
import poneyMagImage from '../../public/projects/poneyFM/poneyMag.png';
import poneyResidencyImage from '../../public/projects/poneyFM/poneyResidency.png';

import bdLandingImage from '../../public/projects/binaryDeconstruction/bdLanding.png';
import bdTotemsImage from '../../public/projects/binaryDeconstruction/bdTotems.png';

import mosaicPreparation from '../../public/projects/mosaic/mosaicPreparation.png';
import mosaicRobotArm from '../../public/projects/mosaic/mosaicRobotArm.png';
import mosaicResult from '../../public/projects/mosaic/mosaicResult.png';

import drCatalinLandingImage from '../../public/projects/drCatalin/drCatalingLanding.png';
import drCatalinDoctorImage from '../../public/projects/drCatalin/drCatalinDoctor.png';

export default function Projects() {
  return (
    <section id="projects" className={style.projects}>
      <h1>Projects</h1>
      <div className={style.projectsGrid}>
        <ProjectBox
          title='Aicole'
          description='An AI-powered e-learning platform that generates personalized exercises,
            automates grading, provides real-time progress tracking and a built-in virtual tutor.'
          images={[aicoleDashboardImage, aicoleLessonListImage, aicoleExercise, aicoleLesson]}
          url={'https://aicole.io'}
        />
        <ProjectBox
          title='Troi'
          description='A ticketing website that showcases events, artists, promoters, and media,
            featuring a user-friendly CMS and real-time content synchronization with a third-party platform.'
          images={[troiEventsImage, troiArtistsImage, troiMediaImage]}
          url={'https://tickets.trommelmusic.com'}
        />
        <ProjectBox
          title='Poney.FM'
          description='An immersive audiovisual platform featuring a live radio stream,
            real-time 2D audio-reactive shaders, and CMS integration.'
          images={[poneyMagImage, poneyResidencyImage, poneyArtistsImage, poneyLandingImage]}
          url={'https://www.poney.fm'}
        />
        <ProjectBox
          title='Binary Deconstruction'
          description='An interactive art installation by the in-dialog collective,
            where visitors were able to generate unique, 3D-printable “totems” based on data captured from face scans.'
          images={[bdLandingImage, bdTotemsImage]}
          url={'https://in-dialog.com/Projects/BinaryDeconstruction'}
        />
        <ProjectBox
          title='Mosaic'
          description='A numeric art installation with the in-dialog collective,
            featuring a UR5 robotic arm that assembles mosaics based on color-segmented images.'
          images={[mosaicRobotArm, mosaicPreparation, mosaicResult]}
        />
        {/*<ProjectBox*/}
        {/*  title='Bosphorus'*/}
        {/*  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'*/}
        {/*  images={[bosphorusImage]}*/}
        {/*/>*/}
        <ProjectBox
          title='Dr Catalin'
          description='A website integrated with a CMS for a Swiss gynecology clinic,
            providing an easily managed platform for sharing essential medical information and services.'
          images={[drCatalinLandingImage, drCatalinDoctorImage]}
        />
      </div>
    </section>
  )
}
