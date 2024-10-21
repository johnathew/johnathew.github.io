import { Container, Group, Tooltip, useMantineColorScheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconHome2 } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import classes from './Header.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle';
import { navData } from '../../util/navData';

export function Header() {

  const { colorScheme } = useMantineColorScheme();

  const items = navData.map((link) => (
    <motion.div
      key={link.label}
      whileHover={{
        scale: 1.1,
        transition: { type: "ease", stiffness: 500 },
        backgroundColor: colorScheme === 'dark' ? 'var(--mantine-color-gray-7)' : 'var(--mantine-color-orange-2)',
        borderRadius: "10px",
      }}
      style={{ borderRadius: "20px" }}
    >
      <Link
        key={link.label}
        to={link.to}
        className={classes.link}
        target="_blank"
      >
        <Tooltip label={link.label}>
          {link.icon}
        </Tooltip>
      </Link>
    </motion.div>

  ));

  return (
    <Container className={classes.inner}>
      <Link to="/" className={classes.navIcon}>
        <Tooltip label="Resume">
          <IconHome2 stroke={1.0} />
        </Tooltip>
      </Link>
      <Group gap={5} className={classes.group}>
        {items}
        <ColorSchemeToggle />
        {/* <span>|</span>
        <NavLink to='myspaceify' className={classes.navIcon}>
          <Tooltip label='myspaceify'><IconRewindBackward15 stroke={1.0} /></Tooltip>
        </NavLink> */}
      </Group>
    </Container>
  );
}