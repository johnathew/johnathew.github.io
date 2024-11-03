import { AppShell, Burger } from '@mantine/core';
// import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import classes from './RootLayout.module.css';
import Nav from '../Nav';

const RootLayout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell className={classes.root} navbar={{ width: '', breakpoint: 'lg', collapsed: { mobile: !opened } }}>
      <AppShell.Header className={classes.header}>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="lg"
          size="xs"
          aria-label="Toggle navigation"
          className={classes.burger}
        />
        <Header />
      </AppShell.Header>
      <AppShell.Navbar className={classes.navbar}>
        <Nav hide={toggle} />
      </AppShell.Navbar>
      <AppShell.Main className={classes.content}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default RootLayout;
