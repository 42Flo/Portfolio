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

    window.addEventListener("scroll", handleScroll);

    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })
  }, []);

  return (
    <header className={style.header}>
      <nav className={classNames(style.navbar, navbarBgVisible && style.navbarBg)}>
        <div className={style.leftNavbar}>
          <Link href="#about">
            <p>About</p>
          </Link>
          <Link href="#skills">
            <p>Skills</p>
          </Link>
          <Link href="#projects">
            <p>Projects</p>
          </Link>
        </div>
        <div className={style.title}>
          <Link href="#top">
            <h3>
              <span>{"< "}</span>
              florg.dev
              <span>{" />"}</span>
            </h3>
          </Link>
        </div>
        <Link href='#contact' className={style.contact}>
          <p>Contact</p>
        </Link>
      </nav>
    </header>
  );
}
