import { Carousel } from '@mantine/carousel';
import { IconArrowMoveLeft, IconArrowMoveRight } from '@tabler/icons-react';
import ProjectCard from '../ProjectCard';
import classes from './CompletedWorks.module.css';
import { rem } from '@mantine/core';
import { projects } from '../../projectsData';

const CompletedWorks = () => {

  const projectCards = projects.map((project, index) => <Carousel.Slide><ProjectCard key={index} {...project} /></Carousel.Slide>);

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%', md: '33.33%', lg: '25%' }}
      slideGap={{ base: 0, sm: 'md' }}
      align="start"
      nextControlIcon={<IconArrowMoveRight style={{ width: rem(16), height: rem(16) }} />}
      previousControlIcon={<IconArrowMoveLeft style={{ width: rem(16), height: rem(16) }} />}
      className={classes.carousel}
    >
      {projectCards}
    </Carousel>
  )
};

export default CompletedWorks;
