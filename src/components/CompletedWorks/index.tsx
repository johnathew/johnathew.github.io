import { Carousel } from "@mantine/carousel";
import { useMantineTheme, rem } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { projects } from "../../projectsData";
import { ProjectCard } from "../ProjectCard";
import classes from "./CompletedWorks.module.css"

export default function CompletedWorks() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = projects.map((item) => (
    <Carousel.Slide key={item.title}>
      <ProjectCard {...item} category={item.description} />
    </Carousel.Slide>
  ));

  return (
      <Carousel
        slideSize={mobile ? "25%" : "25%"}
        slideGap={{ base: rem(2), sm: 'xl' }}
        align="center"
        loop
        slidesToScroll={mobile ? 1 : 2}
        className={classes.carousel}
      >
        {slides}
      </Carousel>
  );
}