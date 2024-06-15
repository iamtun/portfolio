import configApp from '@/configs/app';
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div>Copyright © 2024. All rights are reserved</div>
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
    </footer>
  );
};

export default Footer;
