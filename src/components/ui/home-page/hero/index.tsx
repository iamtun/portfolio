import React from 'react';

import styles from './Hero.module.scss';
import Link from 'next/link';
import SkillList from './skill-list';
import configApp from '@/configs/app';

const Hero: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.hero_content}>
          <div className={styles.hero_text}>
            <h1>{configApp.hero.title}</h1>
            <h2>{configApp.hero.desc}</h2>

            <div className={styles.socials}>
              {configApp.hero.socials.map((social, idx) => (
                <Link
                  href={social.link}
                  key={idx}
                  target="_blank"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.hero_img}></div>
        </div>

        <SkillList />
      </div>
    </section>
  );
};

export default Hero;
