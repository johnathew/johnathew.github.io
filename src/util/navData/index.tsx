import { rem } from '@mantine/core';
import { IconBrandInstagram, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

const styles = {
    width: rem(20),
    height: rem(20),
};

export const navData = [
    { icon: <IconBrandInstagram style={styles} stroke={1.7} />, label: 'Instagram', to: 'https://www.instagram.com/johnathew_k/' },
    { icon: <IconBrandLinkedin style={styles} stroke={1.7} />, label: 'LinkedIn', to: 'https://linkedin.com/in/john-kornegay-00541411b' },
    { icon: <IconBrandGithub style={styles} stroke={1.7} />, label: 'Github', to: 'https://github.com/johnathew' },
];
