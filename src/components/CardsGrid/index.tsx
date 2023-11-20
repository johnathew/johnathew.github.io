import { SimpleGrid, Card, Image, Text, Container, AspectRatio, rem, Paper, Badge, ThemeIcon } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CardsGrid.module.css';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { IconPokeball, IconFileSearch, IconBrandSpotify, IconFile } from '@tabler/icons-react';

const mockdata = [
  {
    title: 'Pokedex',
    icon: <IconPokeball style={{ width: rem(28), height: rem(28) }} />,
    image:
      'https://user-images.githubusercontent.com/91643982/280811997-07821a73-029e-4a0b-9886-c6def7f40343.png',
    description: 'A simply calculator made with HTML, CSS, and Javascript. My first project!rem ipsum lorem ipsum lorem ipsum lorem',
    utilize: ['React', 'TypeScript', 'Mantine', 'Framer Motion', 'React Router']
  },
  {
    title: 'Github Repository Search',
    icon: <IconFileSearch style={{ width: rem(28), height: rem(28) }} />,
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    descriotion: 'A simple search engine for Github repositories using the Github API. Made with React and Typescript.',
  },
  {
    title: 'Spotify Playlist Project',
    icon: <IconBrandSpotify style={{ width: rem(28), height: rem(28) }} />,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    description: 'Project made utilizing the Spotify API, involving PKCE authentication, and the ability to create, edit, and delete playlists.',

  },
  {
    title: 'Resume',
    icon: <IconFile style={{ width: rem(28), height: rem(28) }} />,
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    description: 'The current resume I am using to apply for jobs. Made with React and Typescript.',
  },
];

const boxVariant = {
  visible: { scale: 0.9 },
  hidden: { scale: 0.5 },
}

const badges = [
  { emoji: '☀️', label: 'Sunny weather' },
  { emoji: '🦓', label: 'Onsite zoo' },
  { emoji: '🌊', label: 'Sea' },
  { emoji: '🌲', label: 'Nature' },
  { emoji: '🤽', label: 'Water sports' },
]

export function CardsGrid() {
  const ref = useRef(null)
  const control = useAnimation()
  const inView = useInView(ref)
  const mobile = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));


  const cards = mockdata.map((article, index) => (
    <Paper withBorder radius="md" className={classes.card} key={article.title}>
      <ThemeIcon
        size="lg"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: 'orange', to: 'blue' }}
      >
        {article.icon}
      </ThemeIcon>
      <Text size="xl" fw={500} mt="md">
        {article.title}
      </Text>
      <Text size="sm" mt="sm" c="dimmed">
        Extend default theme with any amount of additional colors, replace shadows, radius, spacing,
        fonts and many other properties to match your design requirements. Mantine theme is just an
        object, you can subscribe to it in any part of application via context and use it to build
        your own components.
      </Text>
    </Paper>
  ));


  return (
    <motion.div variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={{ type: 'spring', duration: 0.7 }}>
      <Container size='md' id='projects'>
        <Text ta="center" fw={500} my={rem(20)} className={classes.title}>PROJECTS</Text>
        <SimpleGrid ref={mobile ? null : ref} cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
      </Container>
    </motion.div>
  );
}


//TODO: add badges to cards, add links to cards, add animations to cards


/*
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} ref={mobile ? ref : null} />
      </AspectRatio>
      <Text className={classes.title} mt="md">
        {article.title} <IconExternalLink style={{
          width: rem(20),
          height: rem(20),
        }} />
      </Text>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt={5} >
        {article.description}
      </Text>
      <Group gap={7} mt={5}>
        {features}
      </Group>
    </Card>
  ));
  */