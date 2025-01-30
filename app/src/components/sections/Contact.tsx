import style from "@/style/modules/contact.module.scss";
import ContactForm from '@/components/ContactForm';
import EmailIcon from '@/components/icons/EmailIcon';
import IconWrapper from '@/components/IconWrapper';
import classNames from 'classnames';

export default function Contact() {
  return (
    <section id='contact' className={style.contact}>
      <div className={style.contactInfo}>
        <h1>Contact</h1>
        <p>If you’re curious about my services, have a collaboration idea, or simply need some tech advice,
          I’m all ears! Drop me a note and I’ll get back to you as soon as possible.</p>
        <a href={'mailto:contact@florg.dev'} className={classNames(style.email, 'clickable')}>
          <IconWrapper>
            <EmailIcon/>
          </IconWrapper>
          <p>contact@florg.dev</p>
        </a>
      </div>
      <ContactForm/>
    </section>
  )
}
