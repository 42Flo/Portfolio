import style from "@/style/modules/projects.module.scss";
import ProjectBox from '@/components/shared/ProjectBox';
import aicoleDashboardImage from '../../public/projects/aicole/aicoleDashboard.png';

export default function Projects() {
  return (
    <section id="projects" className={style.projects}>
      <h1>Projects</h1>
      <div className={style.projectsGrid}>
        <ProjectBox
          title='Aicole'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          images={[aicoleDashboardImage]}
        />
        <ProjectBox
          title='Aicole'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          images={[aicoleDashboardImage]}
        />
        <ProjectBox
          title='Aicole'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          images={[aicoleDashboardImage]}
        />
        <ProjectBox
          title='Aicole'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          images={[aicoleDashboardImage]}
        />
        <ProjectBox
          title='Aicole'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          images={[aicoleDashboardImage]}
        />
        <ProjectBox
          title='Aicole'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          images={[aicoleDashboardImage]}
        />
      </div>
    </section>
  )
}
