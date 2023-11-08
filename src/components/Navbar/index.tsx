import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem, Group } from '@mantine/core';
import {
  IconHome2,
  IconAlien,
  IconClipboardList,
  IconUser,
  IconBriefcase,
  IconBrandGithub,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
  to: string;
}

function NavbarLink({ icon: Icon, label, active, onClick, to }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right">
      <NavLink to={to} onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </NavLink>
    </Tooltip>
  );
}

const navData = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconBriefcase, label: 'Projects' },
  { icon: IconClipboardList, label: 'Resume' },
  { icon: IconUser, label: 'About' },
  { icon: IconAlien, label: 'Aliens' },
];

export function Navbar({ toggle }: { toggle: () => void }) {
  const [active, setActive] = useState(0);

  const clickHandler = (index: number) => {
    setActive(index);
    toggle();
  };

  const links = navData.map((link, index) => (
    <NavbarLink
      {...link}
      to={link.label.toLowerCase() === 'home' ? '/' : `/${link.label.toLowerCase()}`}
      key={link.label}
      active={index === active}
      onClick={() => clickHandler(index)}
    />
  ));

  return (
    <>
      <div className={classes.navbarMain}>
        <Center>
          <Stack justify="center" gap={0}>
            {links}
          </Stack>
        </Center>
      </div>
      <Stack justify="center" gap={0} align="center">
        <NavbarLink to="github.com" icon={IconBrandGithub} label="Github" />
      </Stack>
    </>
  );
}
