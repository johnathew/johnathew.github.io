import { Container, Group, rem, useMantineColorScheme } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle';
import { IconHome2, IconBrandInstagram, IconBrandGithub, IconBrandLinkedin, IconBrandReact } from '@tabler/icons-react';
import { motion } from 'framer-motion';


const styles = {
  width: rem(18),
  height: rem(18),
}

const navData = [
  { icon: <IconHome2 style={styles} stroke={1.7} />, label: 'Home', to: '/' },
  { icon: <IconBrandInstagram  style={styles} stroke={1.7} />, label: 'Instagram', to: 'https://www.instagram.com/johnathew_k/' },
  { icon: <IconBrandLinkedin style={styles} stroke={1.7} />, label: 'LinkedIn', to: 'https://linkedin.com/in/john-kornegay-00541411b' },
  { icon: <IconBrandGithub style={styles} stroke={1.7} />, label: 'Github', to: 'https://github.com/johnathew' }
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
        to={link.to}
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
      <IconBrandReact stroke={1.7} />
      <Group gap={5} className={classes.group}>
        {items}
      <ColorSchemeToggle />
      </Group>
    </Container>
  );
}
// TODOS: add tooltip to navbar link, add menu to toggle on in mobile
