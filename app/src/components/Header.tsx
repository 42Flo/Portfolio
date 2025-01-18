'use client'
import style from "@/style/modules/header.module.css";
import Link from "next/link";
import { useEffect, useState } from 'react';
import classNames from 'classnames';

export default function Header() {
  const [navbarBgVisible, setNavbarBgVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setNavbarBgVisible(window.scrollY > 0);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })
  }, []);

  return (
    <header className={style.header}>
      <nav className={classNames(style.navbar, navbarBgVisible && style.navbarBg)}>
        <div className={style.leftNavbar}>
          <Link href="#about" className={style.navLink}>
            <p>About</p>
          </Link>
          <Link href="#skills" className={style.navLink}>
            <p>Skills</p>
          </Link>
          <Link href="#projects" className={style.navLink}>
            <p>Projects</p>
          </Link>
        </div>
        <div className={style.title}>
          <Link href="#top">
            <h4>
              <span>{"< "}</span>florg.dev<span>{" />"}</span>
            </h4>
          </Link>
        </div>
        <div className={style.contact}>
          <Link href='#contact' className={style.navLink}>
            <p>Contact</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
