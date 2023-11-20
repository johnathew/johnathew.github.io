import {
  Title,
  Button,
  Group,
  Text,
  Stack,
  Container,
  Divider,
  rem,
} from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { Image } from '@mantine/core';
import classes from './Hero.module.css';
import profile from '/Profile2.png';
import Contact from '../Contact';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import HeroList from '../ui/List';



const boxVariant = {
  visible: { scale: 0.9 },
  hidden: { scale: 0.5 },
}



export function Hero() {
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
      transition={{ type: 'spring', duration: 0.5 }}
      ref={ref}
      id='home'
    >
      <Container size='md' className={classes.mainContainer} >
        <Stack className={classes.mainInfo} >
          <Title className={classes.title} id='home'>
            John A. Kornegay
          </Title>
          <Text className={classes.goal}>
            Frontend Developer / Web Designer / Earthling
          </Text>
          <Text className={classes.objective} >
            <b>Objective</b>: A highly motivated individual seeking an internship opportunity to gain experience in the field of web development.
          </Text>
        </Stack>
        <div className={classes.inner}
        >
          <Stack className={classes.wrapper}>
            <motion.div variants={{
              hidden: { opacity: 0.3 },
              visible: { opacity: 1 }
            }} transition={{ delay: 0.3, type: 'ease', }}>
              <Image src={profile} className={classes.image} fallbackSrc='https://placehold.co/400x400?text=:)' alt="headshot photo" />
            </motion.div>
            <div className={classes.contacts} >
              <Contact />
            </div>
          </Stack>
          <div className={classes.content}>
            <Text className={classes.banner}>Features</Text>
            <Divider mb='md' mt='xs' />
            <HeroList />
            <Group mt={30}>
              <motion.div whileHover={{
                scale: 1.1,
                transition: { type: 'ease' },
              }}>
                <Button radius="sm" size="xs" className={classes.control} >
                  Download Resume <IconDownload stroke={3} style={{
                    width: rem(12),
                    height: rem(12),
                    marginLeft: '5px',
                  }} />
                </Button>
              </motion.div>
            </Group>
          </div>
        </div>
      </Container>
    </motion.div >

  );
}


// TODO: add button icon to download button