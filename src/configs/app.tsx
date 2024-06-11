import { BsLinkedin } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';

const configApp = {
  logo: 'Tuna.dev',
  hero: {
    title: 'Front-End React Developer 👋',
    desc: "Hi, I'm Tuna. A Front-end React Developer with 1.5 years of experience based in HCMC, VietNam. 📍",
    socials: [
      {
        icon: <FaGithubAlt fontSize={28} />,
        link: 'https://github.com/iamtun',
      },
      {
        icon: <BsLinkedin fontSize={28} />,
        link: 'https://www.linkedin.com/in/letuan-iuh',
      },
    ],
    skills: ['html,css', 'js,ts', 'react,next', 'docker,scss'],
  },
};

export default configApp;
