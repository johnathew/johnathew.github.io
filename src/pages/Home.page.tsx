import { Hero } from '../components/Hero';

import WorkHistory from '../components/WorkHistory';
import Bio from '../components/Bio';
import { Projects } from '../components/Projects';
import { Divider } from '@mantine/core';

export function HomePage() {


  return (
    <>
      <Hero />
      <Divider />
      <WorkHistory />
      <Divider />
      <Projects />
      <Divider />
    </>
  );
}
