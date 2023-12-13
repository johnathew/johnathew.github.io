import { Container, Text, Title as Head } from "@mantine/core";
import classes from "./Bio.module.css";
import { IconBook } from '@tabler/icons-react'
import { Blockquote } from '@mantine/core';
import { ScrollArea } from '@mantine/core';
import Title from "../ui/Title";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";


const breakStyles = {
  marginBottom: '0.5rem',
  paddingRight: '1rem',
}

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
      transition={{ type: 'ease', duration: 0.7 }}>
      <Container className={classes.wrapper} id='about' ref={ref}>
        <Title title='About Me' />
        <Blockquote icon={icon} radius='md' iconSize={40} className={classes.blockQuote}>
          <ScrollArea className={classes.scroll} h={500}>
            <Head my='xs' order={2} className={classes.head} c='var(--mantine-color-blue-7)' fw={700}>Hello, my name is John Andrew Kornegay 👋 </Head>
            <Text fw={300} style={breakStyles}> I am currently working as a Helpdesk Specialist contracted by the CDC and am looking to transition into a career as a Front End Developer.</Text>

            <Text fw={300} style={breakStyles}>Initially with my degree, I had planned to pursue a career in medicine. Towards the end of my sophomore year, I recognized that I was not passionate about the discipline; however, I felt too invested and decided to push through and continue my studies. After graduation, feeling burnt out and jaded but still unwilling to give up, I decided to pursue a career as a pharmacist. I began working as a pharmacy technician where I very quickly realized being a pharmacist was something I had no interest in doing. The next four years were spent trying different avenues in which I could utilize my degree and still be successful. Some of these included: EMT training, graduate school, and even considering a career in the military.</Text>

            <Text fw={300} style={breakStyles}> In the fall of 2021, after a very difficult but necessary conversation with myself, I decided to finally follow through on a path that I felt passionate about. Something that was done only for myself and not to please others. I decided to pursue a career in web development.</Text>

            <Text fw={300} style={breakStyles}> Art and creativity have always been something I admired and loved; however, they always fell onto the backburner due to pressure from family and friends to pursue a more "practical" career. Upon receiving guidance from a friend who currently works as a software engineer, I decided to pursue a career in web development, a field in which I could express my artistic abilities and challenge my own creativity. </Text>

            <Text fw={300} style={breakStyles}>Primarily using free online resources, I became proficient with HTML, CSS, JavaScript/TypeScript, and React. Utilizing these skills, I created a few projects to showcase my abilities and even created this website to serve as a portfolio.</Text>

            <Text fw={300} style={breakStyles}> I am currently looking for a position as a Front End Developer and am open to any opportunities. I am also open to any advice or guidance from anyone who has been in a similar situation as me.</Text>


            <Text fw={300}>Thank you for your time and consideration.</Text>
          </ScrollArea>
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


//Having pursued various career paths since graduating, I have finally decided to pursue a career in web development.



/*

            And so naturally, I gave in to the fear that my time spent studying for my degree would be wasted if I did not utilize my degree and so decided to pursue a career in pharmacy. I worked as a pharmacy technician with the intention
            of applying to pharmacy school, however after working in the pharmacy and not enjoying it in the slightest I decided to attempt graduate school.


               
            */