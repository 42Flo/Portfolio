'use client'
import style from "@/style/modules/header.module.scss";
import Link from "next/link";
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import AnimatedBurgerCrossIcon from '@/components/shared/icons/AnimatedBurgerCrossIcon';

export default function Header() {
  const [navbarBgVisible, setNavbarBgVisible] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY)
      setNavbarBgVisible(window.scrollY > 0);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return (() => {
      window.removeEventListener('scroll', handleScroll);
    })
  }, []);

  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth)
      if (window.innerWidth > 1024) {
        document.body.style.overflow = '';
      } else if (navbarActive) {
        document.body.style.overflow = 'hidden';
      }
    }

    window.addEventListener('resize', handleResize);

    return (() => {
      window.removeEventListener('resize', handleResize);
    })
  }, [navbarActive])

  function toggleNavbarActive() {
    document.body.style.overflow = !navbarActive ? 'hidden' : '';
    setNavbarActive(!navbarActive);
  }

  function disableNavbarActive() {
    document.body.style.overflow = '';
    setNavbarActive(false);
  }

  return (
    <>
      <header className={style.header}>
        <nav className={classNames(style.navbar, (navbarBgVisible || navbarActive) && style.navbarBg)}>
          <div className={style.leftNavbar}>
            <Link href="#about" className={style.navLink}>
              <p>About</p>
            </Link>
            <Link href="#projects" className={style.navLink}>
              <p>Projects</p>
            </Link>
          </div>
          <div className={style.title}>
            <Link href="#top" onClick={disableNavbarActive}>
              <h4>
                <span>{"< "}</span>florg.dev<span>{" />"}</span>
              </h4>
            </Link>
          </div>
          <div className={style.rightNavbar}>
            <Link href='#contact' className={style.navLink}>
              <p>Contact</p>
            </Link>
            <AnimatedBurgerCrossIcon
              active={navbarActive}
              onClick={toggleNavbarActive}
            />
          </div>
        </nav>
        <div className={classNames(style.mobileHeaderWrapper, navbarActive && style.active)}>
          <div className={style.mobileHeader}>
            <div className={style.mobileNavbar}>
              <Link href={'#about'} onClick={disableNavbarActive}>
                <h3>About</h3>
              </Link>
              <Link href={'#projects'} onClick={disableNavbarActive}>
                <h3>Projects</h3>
              </Link>
              <Link href={'#contact'} onClick={disableNavbarActive}>
                <h3>Contact</h3>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
