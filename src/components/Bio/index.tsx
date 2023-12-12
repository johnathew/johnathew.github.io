import { Container, Text, Title as Head, Divider, Space } from "@mantine/core";
import classes from "./Bio.module.css";
import { IconBook } from '@tabler/icons-react'
import { Blockquote } from '@mantine/core';
import { ScrollArea } from '@mantine/core';
import Title from "../ui/Title";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";


const boxVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const Bio = () => {
  const icon = <IconBook />;

  const ref = useRef(null)
  const control = useAnimation()
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={{ type: 'ease', duration: 0.6 }}>
      <Container className={classes.wrapper} id='about' ref={ref}>
        <Title title='About Me' />
        <Blockquote icon={icon} radius='md'  iconSize={40} className={classes.block}>
          {/* <ScrollArea className={classes.scroll}> */}
          <Head my='xs' order={3} className={classes.head} c='var(--mantine-color-blue-7)' fw={600}>Hello, my name is John Andrew Kornegay.</Head>
          <Text mt='xs'>
            I am a graduate from <strong style={{ color: 'rgba(150, 30, 30, 1)' }}>Texas A&M University</strong>, where in 2016 I earned a <strong>Bachelor of Science degree in Molecular and Cell Biology</strong>.
          </Text>

          <Text my='xs'> Having pursued various career paths since graduating, I have finally decided to pursue a career in web development.
            </Text>
          <Text mt='sm'>As may be inferred, the path to pursuing this career was not very straightforward. Throughout my college career, I was never quite sure of what I wished to accomplish with my degree but always felt too invested to change my major.
            After graduation I made a promise to myself: the next important decision I made would be one that I was passionate about.
          </Text>
          <Text my='xs'>
            And so naturally, I gave in to the fear that my time spent studying for my degree would be wasted if I did not utilize my degree and so decided to pursue a career in pharmacy. I worked as a pharmacy technician with the intention
            of applying to pharmacy school, however after working in the pharmacy and not enjoying it in the slightest I decided to attempt graduate school.
          </Text>
          Once again I found myself in a situation where I was struggling to apply myself because deep down, I knew this was not the path for me. I decided to finally make a change. After a very honest conversation with myself, I realized that
          if I ever wanted to move forward, I would have to let the time spent earning my degree go.
          <Text mt='xs'>

            Art and creativity have always been something I admired and loved, however they always fell onto
            the backburner due to pressure from family and friends to pursue a more "practical" career.

            Upon receiving guidance from a friend who currently works as a software engineer, I decided to pursue a career in web development. Primarily using free online resources,
            I became proficient with HTML, CSS and Javascript/ Typescript. Utilizing these skills I created a few projects to showcase my abilities, and created this website to serve as a portfolio.

            I am currently looking for a position as a Front End Developer, and am open to any opportunities. I am also open to any advice or guidance from anyone who has been in a similar situation as me.
          </Text>
          {/* </ScrollArea> */}
        </Blockquote>
      </Container>
    </motion.div>);
};

export default Bio;


// After graduation, the intention was to attend pharmacy school.
// However, after working in the pharmacy and not enjoying it in the slightest, I decided to attempt graduate school.

// I was accepted into a Masters program at the University of Texas Rio Grande Valley, and began my studies in 2021. After only a semeseter, I realized that I had to accept that 
// this was not what I wanted to do with my life. Trying so hard to make something of my degree, but missing the passion required to be successful, I decided to 

// However, deep down I knew this was not
// something I felt passinate about, and never felt like I was making any progress. Given how stubborn I am and how difficult it is for me to admit defeat, I continued to pursue this path for 4 years. I decided to make a change. I have always felt most at home at my computer, and after many difficult, but honest
// conversations with myself I felt that in order for me to be successful in my goals, passion must be present. Art and creativity have always been something I admired and loved, however they always fell onto
// the backburner due to pressure from family and friends to pursue a more "practical" career.