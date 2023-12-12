import { rem, Image } from "@mantine/core";
import { IconPokeball, IconCode, IconExternalLink, IconFileSearch, IconBrandSpotify, IconFileAnalytics, IconBrandReact, IconBrandTypescript, IconBrandNextjs, IconBrandTailwind, IconBrandCss3, IconBrandHtml5 } from "@tabler/icons-react";
import rrDark from '/rrDark.svg';
import rrLight from '/rrLight.svg';
import reactQuery from '/reactQuery.svg';


export const projects = [
    {
        title: 'Pokedex',
        icon: <IconPokeball style={{ width: rem(32), height: rem(32), color: 'var(--mantine-color-red-7' }} />,
        ghLink: <IconCode stroke={1.7} style={{ width: rem(25), height: rem(25), color: 'var(--mantine-color-blue-6' }} />,
        extLinkIcon: <IconExternalLink stroke={1.7} style={{ width: rem(25), height: rem(25), color: 'var(--mantine-color-orange-4' }} />,
        image:
            'https://user-images.githubusercontent.com/91643982/280811997-07821a73-029e-4a0b-9886-c6def7f40343.png',
        description: 'A Pokedex made with React, ReactQuery, and Typescript. Utilizes the PokeAPI to fetch data.',
        tooltipGH: 'Github Repository',
        tooltipExt: 'Live Demo',
        utilizes: [{ tech: 'React' }, { tech: 'Typescript' }, { tech: 'React Router' }, { tech: 'PokeAPI' }, { tech: 'Tailwind' }, { tech: 'ReactQuery' }],
        to: 'https://github.com/johnathew/pokemonAPI-reacthooks',
        extLink: 'https://johnspokedex.netlify.app/'
    },
    {
        title: 'Github Repo Search',
        icon: <IconFileSearch style={{ width: rem(32), height: rem(32), color: 'var(--mantine-color-indigo-8' }} />,
        ghLink: <IconCode stroke={1.7} style={{ width: rem(25), height: rem(25), color: 'var(--mantine-color-blue-6' }} />,
        extLinkIcon: <IconExternalLink stroke={1.7} style={{ width: rem(25), height: rem(25), color: 'var(--mantine-color-orange-4' }} />,
        image:
            'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        description: 'A simple search engine for Github repositories using the Github API. Made with React and Typescript.',
        tooltipGH: 'Github Repository',
        tooltipExt: 'Live Demo',
        utilizes: [{ tech: 'React' }, { tech: 'Typescript' }, { tech: 'Github API' }, { tech: 'Tailwind' }],
        to: 'https://github.com/johnathew/github_react_exercise_ts',
        extLink: 'https://deluxe-cascaron-d7a13a.netlify.app/',
    },
    {
        title: 'Spotify Playlist Project',
        icon: <IconBrandSpotify style={{ width: rem(32), height: rem(32), color: 'var(--mantine-color-green-8' }} />,
        ghLink: <IconCode stroke={1.7} style={{ width: rem(25), height: rem(25), color: 'var(--mantine-color-blue-6' }} />,
        extLinkIcon: <IconExternalLink stroke={1.7} style={{ width: rem(25), height: rem(25), color: 'var(--mantine-color-orange-4' }} />,
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        description: 'Project made utilizing the Spotify API, PKCE authentication, and the ability to edit and create playlists.',
        utilizes: [{ tech: 'React' }, { tech: 'Typescript' }, { tech: 'Spotify API' }, { tech: 'Tailwind' }, { tech: 'ReactQuery' }, { tech: 'PKCE Authentication' }],
        tooltipGH: 'Github Repository',
        tooltipExt: 'Live Demo',
        to: 'https://github.com/johnathew/spotify_project',
        extLink: 'https://profound-buttercream-a93712.netlify.app'

    },
    {
        title: 'Resume',
        icon: <IconFileAnalytics style={{ width: rem(32), height: rem(32), color: 'var(--mantine-color-blue-7' }} />,
        ghLink: <IconCode stroke={1.7} style={{ width: rem(25), height: rem(25), color: 'var(--mantine-color-blue-6' }} />,
        extLinkIcon: <IconExternalLink stroke={1.7} style={{ width: rem(25), height: rem(25), color: 'var(--mantine-color-orange-4' }} />,
        image:
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        description: 'The current resume I am using to apply for jobs. Made with React and Typescript.',
        utilizes: [{ tech: 'React' }, { tech: 'Typescript' }, { tech: 'Framer Motion' }, { tech: 'React Router' }, { tech: 'MantineUI' }],
        tooltipGH: 'Github Repository',
        tooltipExt: 'You are here!',
        to: 'https://github.com/johnathew/resume_JAK',
        extLink: '/',
    },
];



export const techBadgesData = [
    { tech: 'React', badge: <IconBrandReact stroke={1.7} />, color: 'var(--mantine-color-blue-6)' },
    { tech: 'Tailwind', badge: <IconBrandTailwind stroke={1.7} />, color: 'var(--mantine-color-blue-6)' },
    { tech: 'Typescript', badge: <IconBrandTypescript stroke={1.7} />, color: 'var(--mantine-color-blue-6)' },
    { tech: 'HTML', badge: <IconBrandHtml5 stroke={1.7} />, color: 'var(--mantine-color-orange-6)' },
    { tech: 'CSS', badge: <IconBrandCss3 stroke={1.7} />, color: 'var(--mantine-color-blue-4)' },
    { tech: 'NextJS', badge: <IconBrandNextjs stroke={1.7} />, color: 'light-dark(var(--mantine-color-gray-2), (--mantine-color-gray-8)' },
    { tech: 'React Router', badgeLight: <Image src={rrLight} w={'24px'} />, badgeDark: <Image src={rrDark} w={'24px'} /> },
    { tech: 'React Query', badge: <Image src={reactQuery} w={'24px'} />, },
]


export const boxVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, },
  }