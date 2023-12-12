import Hero from '../components/Hero';
import WorkHistory from '../components/WorkHistory';
import Bio from '../components/Bio';
import { Projects } from '../components/Projects';
import { Divider } from '@mantine/core';
import TechComps from '../components/TechComps';

export function HomePage() {


  return (
    <>
      <Hero />
      <Divider mt='xl' />
      <WorkHistory />
      <Projects />
      <TechComps />
      <Bio />
    </>
  );
}
