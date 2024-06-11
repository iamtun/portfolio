/* eslint-disable @next/next/no-img-element */

import React from 'react';
import styles from './Skill.module.scss';
import configApp from '@/configs/app';

const SkillList: React.FC = () => {
  return (
    <div className={styles.container}>
      <strong>Tech Stack</strong>

      <div className={styles.logos}>
        <ul>
          {configApp.hero.skills.map((skill, idx) => (
            <li key={idx}>
              <img
                src={`https://skillicons.dev/icons?i=${skill}`}
                alt="skill-icon"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillList;
