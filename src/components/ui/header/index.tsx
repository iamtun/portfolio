import React from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';
const Header = () => {
  return (
    <header className={styles.wrapper}>
      <section className={styles.container}>
        <div className={styles.logo}>Tuna</div>

        <nav>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Experience</Link>
          <Link href={'#'}>Projects</Link>
          <Link href={'#'}>Contact</Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
