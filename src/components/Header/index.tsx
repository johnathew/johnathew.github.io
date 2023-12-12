import { Container, Group, useMantineColorScheme } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle';
import { IconBrandReact } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { navData } from '../../util/navData';


export function Header() {

  const { colorScheme } = useMantineColorScheme();

  const items = navData.map((link) => (
    <motion.div key={link.label} whileHover={{
      scale: 1.2,
      transition: { type: 'ease', stiffness: 500 },
      backgroundColor: colorScheme === 'dark' ? 'var(--mantine-color-gray-7)' : 'var(--mantine-color-orange-2)',
      borderRadius: '20px'
    }} style={{ borderRadius: '20px' }}>
      <NavLink
        key={link.label}
        to={link.to}
        className={classes.link}
      >
        {link.icon}
      </NavLink>
    </motion.div>

  ));

  return (
    <Container className={classes.inner}>
      <IconBrandReact stroke={1.6} />
      <Group gap={5} className={classes.group}>
        {items}
        <ColorSchemeToggle />
      </Group>
    </Container>
  );
}
