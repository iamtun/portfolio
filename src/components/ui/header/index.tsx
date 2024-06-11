import React from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';
import {Poppins} from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '900'],
});

const Header = () => {
  return (
    <header className={`${styles.container} ${poppins.className}`}>
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
