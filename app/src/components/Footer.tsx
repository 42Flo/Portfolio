import style from '@/style/modules/footer.module.scss';
import CopyrightIcon from '@/components/icons/CopyrightIcon';
import GithubIcon from '@/components/icons/GithubIcon';

export default function Footer() {
  return (
    <div className={style.footer}>
      <p>
        <CopyrightIcon />
        2025 Florian Régulier Gayet
      </p>
      <a className={'clickable'} href={'https://github.com/42Flo/Portfolio'} target={'_blank'}>
        <GithubIcon />
        Source code
      </a>
    </div>
  )
}
