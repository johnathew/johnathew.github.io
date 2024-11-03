import { Container, Group, Tooltip } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle';
import { headerData } from '../../data/headerData';

export function Header() {
  const items = headerData.map((link) => (
    <Link
      key={link.label}
      to={link.to}
      className={classes.link}
      target={link.to === '/' ? undefined : '_blank'}
    >
      <Tooltip label={link.label}>
        {link.icon}
      </Tooltip>
    </Link>
  ));

  return (
    <Container className={classes.inner}>
      <Group gap={5}>
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
