import style from '@/style/modules/about.module.scss';
import Image from 'next/image';
import imageFlo from '../../../public/me.png';
import IconWrapper from '@/components/IconWrapper';
import GithubIcon from '@/components/icons/GithubIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import SkillsCarousel from '@/components/SkillsCarousel';

export default function About() {
  return (
    <section id='about' className={style.about}>
      <div className={style.infoImage}>
        <div className={style.information}>
          <div>
            <h2>Florian</h2>
            <h3>REGULIER GAYET</h3>
          </div>
          <p>
            I’m a dedicated computer science enthusiast with a solid grounding in low-level programming honed at <b>42
            Paris</b>.
            Over the years, I’ve co-founded a tech company and taken on numerous freelance projects,
            which allowed me to deepen my expertise in <b>full-stack development</b>,
            <b> system architecture </b> and <b>AI integration</b>.
            My approach blends creativity and technical rigor, whether I’m designing scalable back-end systems,
            developing intuitive user interfaces, or harnessing the power of machine learning.
            I love tackling challenging problems, collaborating with driven teams,
            and pushing the boundaries of what’s possible in technology.
          </p>
          <div className={style.icons}>
            <IconWrapper path={'https://github.com/42Flo'}>
              <GithubIcon/>
            </IconWrapper>
            <IconWrapper path={'https://www.linkedin.com/in/florianreguliergayet'}>
              <LinkedinIcon/>
            </IconWrapper>
          </div>
        </div>
        <div className={style.imageContainer}>
          <Image src={imageFlo} alt={'me'}/>
        </div>
      </div>
      <SkillsCarousel/>
    </section>
  )
}
