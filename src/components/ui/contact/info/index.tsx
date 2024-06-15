import React from 'react';
import styles from './Info.module.scss';

interface InfoProps {
  icon: React.ReactNode;
  label: string;
  content: string;
}

const Info: React.FC<InfoProps> = ({ icon, label, content }) => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.text}>
        <strong>{label}</strong>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Info;
