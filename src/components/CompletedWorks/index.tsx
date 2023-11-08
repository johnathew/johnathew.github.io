import { Carousel } from '@mantine/carousel';
import {IconArrowMoveLeft, IconArrowMoveRight } from '@tabler/icons-react';
import ProjectCard from '../ProjectCard';
import classes from './CompletedWorks.module.css';
import { rem } from '@mantine/core';

const CompletedWorks = () => {
  return (
    <Carousel 
    slideSize={{ base: '100%', sm: '50%', md: '33.33%' }}
    slideGap={{ base: 0, sm: 'md' }}
    align="center"
    nextControlIcon={<IconArrowMoveRight  style={{ width: rem(16), height: rem(16) }} />}
    previousControlIcon={<IconArrowMoveLeft style={{ width: rem(16), height: rem(16) }} />}
    className={classes.carousel}
    >
     <Carousel.Slide>
        <ProjectCard />
     </Carousel.Slide>
      <Carousel.Slide>
      <ProjectCard />
      </Carousel.Slide>
      <Carousel.Slide><ProjectCard /></Carousel.Slide>
      <Carousel.Slide><ProjectCard /></Carousel.Slide>
      <Carousel.Slide><ProjectCard /></Carousel.Slide>
    </Carousel>
)
};

export default CompletedWorks;
