import { About, Contact, Hero, ProjectList } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frontend developer | Tuna dev',
  description: 'Tuna dev portfolio',
  keywords: ['Tuna', 'Lê Tuấn', 'web developer', 'frontend developer'],
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectList />
      <Contact />
    </>
  );
}
