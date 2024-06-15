import styles from './Contact.module.scss';
import configApp from '@/configs/app';
import Info from './info';

const Contact: React.FC = () => {
  return (
    <section
      className={styles.wrapper}
      id="contact"
    >
      <div className={styles.container}>
        <h2>{configApp.contact.title}</h2>
        <h3>{configApp.contact.desc}</h3>
        <div className={styles.content}>
          {configApp.contact.infoList.map((info, idx) => (
            <Info
              {...info}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
