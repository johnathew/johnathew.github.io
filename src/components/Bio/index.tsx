import { Container, Text, Title, TypographyStylesProvider } from "@mantine/core";
import classes from "./Bio.module.css";
import { IconBook } from '@tabler/icons-react'
import { Blockquote } from '@mantine/core';
import { ScrollArea } from '@mantine/core';

// add typography and grad picture here

const Bio = () => {
  const icon = <IconBook />;
  return (
    <Container size='md' className={classes.wrapper} id='about'>
      <Text fw={500} ml='xs' mb='md' className={classes.title}>About</Text>
      <Blockquote color="blue" icon={icon} radius='md' className={classes.block} >
        <ScrollArea className={classes.scroll}>
          <TypographyStylesProvider className={classes.textContent}>
            <Title order={3}>
              Hello, my name is John A. Kornegay and this is my 'about me' page.
            </Title>
            <p>
              I am a 2016 graduate from Texas A&M University
              with a Bachelors of Science in Biology. After graduating I spent 4 years working as a pharmacy technician with the goal of attending pharmacy school. 
              
              <br />

              However, deep down I knew this was not
              something I felt passinate about, and never felt like I was making any progress. Given how stubborn I am and how difficult it is for me to admit defeat, I continued to pursue this path for 4 years. I decided to make a change. I have always felt most at home at my computer, and after many difficult, but honest
              conversations with myself I felt that in order for me to be successful in my goals, passion must be present. Art and creativity have always been something I admired and loved, however they always fell onto
              the backburner due to pressure from family and friends to pursue a more "practical" career.
              <br />
              Upon receiving guidance from a friend who currently works as a software engineer, I decided to pursue a career in web development. Primarily using free online resources,
              I became proficient with HTML, CSS and Javascript/ Typescript. Utilizing these skills I created a few projects to showcase my abilities, and created this website to serve as a portfolio.
              <br />
              I am currently looking for a position as a Front End Developer, and am open to any opportunities. I am also open to any advice or guidance from anyone who has been in a similar situation as me.
            </p>

          </TypographyStylesProvider>
        </ScrollArea>
      </Blockquote>
    </Container>);
};

export default Bio;
