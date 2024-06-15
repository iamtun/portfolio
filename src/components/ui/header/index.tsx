'use client';
import React from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const handleClickLink = (e: any, id: null | string) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      if (id) {
        const section = document.getElementById(id);
        if (section) {
          const sectionPosition =
            section.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = sectionPosition - 100;
          window?.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      } else {
        window?.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };
  return (
    <header
      className={`${styles.container}`}
      id="header"
    >
      <h3
        className={styles.logo}
        onClick={() => router.push('/')}
      >
        Tuna.dev
      </h3>

      <nav>
        <Link
          href={'/'}
          onClick={(e) => handleClickLink(e, '')}
        >
          Home
        </Link>
        <Link
          href={'#about'}
          onClick={(e) => handleClickLink(e, 'about')}
        >
          About
        </Link>
        <Link
          href={'#project'}
          onClick={(e) => handleClickLink(e, 'project')}
        >
          Projects
        </Link>
        <Link
          href={'#contact'}
          onClick={(e) => handleClickLink(e, 'contact')}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
