import { Divider } from '@mantine/core';
import Hero from '../components/Hero';
import WorkHistory from '../components/WorkHistory';
import TechComps from '../components/TechComps';
import { Projects } from '../components/Projects';
import Bio from '../components/Bio';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <>

      <Hero />
      <Divider mt="xl" />
      <Projects />
      <TechComps />
      <WorkHistory />
      {/* <Bio /> */}
      <Footer />
    </>
  );
}
