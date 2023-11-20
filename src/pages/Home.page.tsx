import { motion, useScroll, useSpring } from 'framer-motion';
import { Hero } from '../components/Hero';
import CompletedWorks from '../components/CompletedWorks';
import WorkHistory from '../components/WorkHistory';
import Bio from '../components/Bio';
import { CardsGrid } from '../components/CardsGrid';
import { Divider } from '@mantine/core';

export function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  return (
    <>
      <Hero />
      <Divider />
      <CardsGrid />
      <Divider />
      <WorkHistory />
      <Divider />
      <Bio />
    </>
  );
}
