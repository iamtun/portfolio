import React from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={`${styles.container}`}>
      <h3 className={styles.logo}>Tuna.dev</h3>

      <nav>
        <Link href={'#'}>Home</Link>
        <Link href={'#'}>About</Link>
        <Link href={'#'}>Projects</Link>
        <Link href={'#'}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
