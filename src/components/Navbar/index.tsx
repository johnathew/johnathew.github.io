import { Center, Tooltip, Stack, rem, useMantineColorScheme, } from '@mantine/core';
import {
  IconHome2,
  IconAlien,
  IconClipboardList,
  IconUser,
  IconBriefcase,
  IconBrandGithub,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
  to: string;


}

function NavbarLink({ icon: Icon, label, active, onClick, to }: NavbarLinkProps) {

  const { colorScheme } = useMantineColorScheme();

  return (
    <>
    <Tooltip label={label} position="bottom">
      <motion.div whileHover={{
        scale: 1.2,
        transition: { type: 'ease', stiffness: 500, },
        backgroundColor: colorScheme === 'dark' ? 'var(--mantine-color-gray-7)' : 'var(--mantine-color-blue-9)',
        opacity: 0.8,
      }}
        style={{ borderRadius: '10px' }}>
        <NavLink to={to} onClick={onClick} className={classes.link} data-active={active || undefined}>
          <Icon style={{ width: rem(200), height: rem(20) }} stroke={1.2} className={classes.icon} />
        </NavLink>
      </motion.div>
    </Tooltip>
    </>
  );
}

const navData = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconBriefcase, label: 'Projects' },
  { icon: IconClipboardList, label: 'Resume' },
  { icon: IconUser, label: 'About' },
  { icon: IconAlien, label: 'Aliens' },
  { icon: IconBrandGithub, label: 'Github' }
];

export function Navbar({ toggle }: { toggle: () => void }) {
  const location = useLocation();

  const clickHandler = () => {
    toggle()
  }

  const activeLink = navData.find((link) => {
    const linkTo = link.label.toLowerCase() === 'home' ? '/' : `/${link.label.toLowerCase()}`;
    return location.pathname === linkTo;
  }
  );

  const links = navData.map((link) => (
    <NavbarLink
      {...link}
      to={link.label.toLowerCase() === 'home' ? '/' : `/${link.label.toLowerCase()}`}
      key={link.label}
      active={activeLink === link}
      onClick={clickHandler}
    />
  ));

  return (
    <>
      <div className={classes.navbarMain}>
        <Center>
          <Stack justify="center" gap={7}>
            {links}
          </Stack>
        </Center>
      </div>
    </>
  );
}
