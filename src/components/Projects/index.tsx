import { SimpleGrid, Text, Container, rem, Paper, Badge, ThemeIcon, Group, useMantineColorScheme } from '@mantine/core';
import classes from './Projects.module.css';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { IconPokeball, IconFileSearch, IconBrandSpotify, IconFile, IconExternalLink } from '@tabler/icons-react';
import { Link } from 'react-router-dom';


const mockdata = [
  {
    title: 'Pokedex',
    icon: <IconPokeball style={{ width: rem(28), height: rem(28) }} />,
    ghLink: <IconExternalLink stroke={1} style={{ width: rem(30), height: rem(30), color: 'var(--mantine-color-blue-7' }} />,
    image:
      'https://user-images.githubusercontent.com/91643982/280811997-07821a73-029e-4a0b-9886-c6def7f40343.png',
    description: 'A Pokedex made with React, ReactQuery, and Typescript. Utilizes the PokeAPI to fetch data.',

    utilizes: ['React', 'TypeScript', 'Framer Motion', 'React Router', 'PokeAPI', 'Tailwind', 'React Query'],
    to: 'https://github.com/johnathew/pokemonAPI-reacthooks',
    extLink: 'https://johnspokedex.netlify.app/'
  },
  {
    title: 'Github Repository Search',
    icon: <IconFileSearch style={{ width: rem(28), height: rem(28) }} />,
    ghLink: <IconExternalLink stroke={1} style={{ width: rem(30), height: rem(30), color: 'var(--mantine-color-blue-7' }} />,
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    description: 'A simple search engine for Github repositories using the Github API. Made with React and Typescript.',
    utilizes: ['React', 'TypeScript', 'Github API', 'Tailwind', 'React Query'],
    to: 'https://github.com/johnathew/github_react_exercise_ts',
    extLink: 'https://deluxe-cascaron-d7a13a.netlify.app/',
  },
  {
    title: 'Spotify Playlist Project',
    icon: <IconBrandSpotify style={{ width: rem(28), height: rem(28) }} />,
    ghLink: <IconExternalLink stroke={1} style={{ width: rem(30), height: rem(30), color: 'var(--mantine-color-blue-7' }} />,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    description: 'Project made utilizing the Spotify API, involving PKCE authentication, and the ability to create, edit, and delete playlists.',
    to: 'https://github.com/johnathew/spotify_project',
    extLink: 'https://deluxe-cascaron-d7a13a.netlify.app/'

  },
  {
    title: 'Resume',
    icon: <IconFile style={{ width: rem(28), height: rem(28) }} />,
    ghLink: <IconExternalLink stroke={1} style={{ width: rem(30), height: rem(30), color: 'var(--mantine-color-blue-7' }} />,
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    description: 'The current resume I am using to apply for jobs. Made with React and Typescript.',
    to: 'https://github.com/johnathew/resume_JAK',
    extLink: 'https://github.com/johnathew/resume_JAK',
  },
];

const boxVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}



const badges = [
  { label: 'Typescript' },
  { label: 'React' },
  { label: 'Tailwind' },
  { label: 'React Query' },
  { label: 'React Router DOM' },
  { label: 'Framer Motion' },
  { label: 'Spotify API' },
  { label: 'Github API' },
  { label: 'PokeAPI' },
]
const features = badges.map((badge) => (
  <Badge variant="light" key={badge.label}>
    {badge.label}
  </Badge>
));
export function Projects() {
  const ref = useRef(null)
  const control = useAnimation()
  const inView = useInView(ref)
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  const features = badges.map((badge) => (
    <Badge variant="light" color={`${colorScheme === 'dark' ? 'yellow' : 'blue'}`} key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));


  const cards = mockdata.map((article) => (
    <Paper withBorder radius="md" className={classes.card} key={article.title}>

      <Group justify='space-between'>
        <ThemeIcon
          size="lg"
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: 'orange', to: 'blue' }}
        >
          {article.icon}
        </ThemeIcon>
        <Link to={article.to} style={{ textDecoration: 'none' }}>
          {article.ghLink}
        </Link>
      </Group>
      <Text size="xl" fw={500} mt="md">
        {article.title}
      </Text>
      <Text size="sm" mt="sm" c="dimmed" mb="xs">
        {article.description}
      </Text>
      {features}

    </Paper>
  ));


  return (
    <motion.div variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={{ type: 'spring', duration: 0.7 }}>
      <Container size='md' p='md' id='projects'>
        <Text fw={500} className={classes.title}>Projects</Text>
        <div className={classes.wrapper}>
          <SimpleGrid ref={ref} cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
        </div>
      </Container>
    </motion.div>
  );
}


//TODO: add badges to cards, add links to cards, add animations to cards
