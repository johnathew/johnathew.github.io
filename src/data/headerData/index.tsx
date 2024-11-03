import { rem } from '@mantine/core';
import { IconBrandInstagram, IconBrandLinkedin, IconBrandGithub, IconHome2 } from '@tabler/icons-react';

export const styles = {
    width: rem(20),
    height: rem(20),
};

export const headerData = [
    { icon: <IconHome2 style={styles} stroke={1.7} />, label: 'Resume', to: '/' },
    { icon: <IconBrandInstagram style={styles} stroke={1.7} />, label: 'Instagram', to: 'https://www.instagram.com/johnathew_k/' },
    { icon: <IconBrandLinkedin style={styles} stroke={1.7} />, label: 'LinkedIn', to: 'https://linkedin.com/in/john-kornegay-00541411b' },
    { icon: <IconBrandGithub style={styles} stroke={1.7} />, label: 'Github', to: 'https://github.com/johnathew' },
];
