import { Container, Group, Text, rem, useMantineColorScheme, ThemeIcon } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle';
import { IconHome2, IconBriefcase, IconClipboardList, IconUser, IconAlien, IconBrandGithub, IconCertificate, IconBrandReact } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const styles = {
  width: rem(20),
  height: rem(20),
}

const navData = [
  { icon: <IconHome2 style={styles} stroke={1.7} />, label: 'Home' },
  { icon: <IconBriefcase style={styles} stroke={1.7} />, label: 'Projects' },
  { icon: <IconClipboardList style={styles} stroke={1.7} />, label: 'Resume' },
  { icon: <IconUser style={styles} stroke={1.7} />, label: 'About' },
  { icon: <IconAlien style={styles} stroke={1.7} />, label: 'Aliens' },
  { icon: <IconBrandGithub style={styles} stroke={1.7} />, label: 'Github' }
];
export function Header({ toggle }: { toggle: () => void }) {

  const { colorScheme } = useMantineColorScheme();

  const clickHandler = () => {
    toggle()
  }
  const items = navData.map((link) => (
    <motion.div key={link.label} whileHover={{
      scale: 1.2,
      transition: { type: 'ease', stiffness: 500, },
      backgroundColor: colorScheme === 'dark' ? 'var(--mantine-color-gray-7)' : 'var(--mantine-color-orange-2)',
      opacity: 0.8,
    }} style={{ borderRadius: '10px' }} >
      <NavLink
        key={link.label}
        to={link.label.toLowerCase() === 'home' ? '/' : `/${link.label.toLowerCase()}`}
        className={classes.link}
        style={({ isActive }) => ({ backgroundColor: isActive ? 'var(--mantine-color-orange-2)' : '' })}
        onClick={clickHandler}
      >
        {link.icon}
      </NavLink>
    </motion.div>

  ));


  return (
    <Container fluid size="md" className={classes.inner}>
      <IconBrandReact stroke={1.5} />
      <Group gap={5} visibleFrom="xs" className={classes.group}>
        {items}
      </Group>
      <ColorSchemeToggle />
    </Container>
  );
}
// TODOS: add tooltip to navbar link, add menu to toggle on in mobile
