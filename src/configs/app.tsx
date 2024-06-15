import { BsLinkedin } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { GrMapLocation } from 'react-icons/gr';

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
  about: {
    title: 'About',
    desc: `A Front-end React Developer based in HCMC, VietNam. 📍`,
    aboutMe: `Hey, I'm Tuan Le, a Frontend Developer. I'm passionate about creating clean UI/UX for users. Currently, my main stack includes React/Next.js, Antd, CSS, and TypeScript. I also have experience working with Strapi CMS and Appsmith. I know a little about databases like PostgreSQL and Mongodb.`,
  },
  contact: {
    title: 'Contact',
    desc: "Let's get in touch! 😊",
    infoList: [
      {
        icon: (
          <GrMapLocation
            color="#147efb"
            size={32}
          />
        ),
        label: 'Location',
        content: 'HCMC, VietNam',
      },
      {
        icon: (
          <FiMail
            color="#147efb"
            size={32}
          />
        ),
        label: 'Gmail',
        content: 'tuanle.workse@gmail',
      },
    ],
  },
};

export default configApp;
