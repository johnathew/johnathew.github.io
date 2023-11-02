import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem, Group } from '@mantine/core';
import {
  IconHome2,
  IconAlien,
  IconClipboardList,
  IconUser,
  IconBriefcase,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const navData = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconBriefcase, label: 'Projects' },
  { icon: IconAlien, label: 'Aliens' },
  { icon: IconClipboardList, label: 'Resume' },
  { icon: IconUser, label: 'About' },
];

export function Navbar() {
  const [active, setActive] = useState(2);

  const links = navData.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <div className={classes.navbarMain}>
      <Center>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </Center>
    </div>
  );
}
