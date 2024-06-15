import Image from 'next/image';
import styles from './About.module.scss';
import CoverParticles from './cover';
import configApp from '@/configs/app';
const About: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <CoverParticles />
      <div className={styles.container}>
        <Image
          src={'/images/my-avatar.jpg'}
          width={300}
          height={400}
          alt={'avatar'}
        />

        <div
          className={styles.content}
          id="about"
        >
          <h2>{configApp.about.title}</h2>
          <h3>{configApp.about.desc}</h3>

          <p>{configApp.about.aboutMe}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
