import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from '../Header';
import classes from './RootLayout.module.css';
import {Outlet } from 'react-router-dom';

const RootLayout = () => {
  const [opened, { toggle }] = useDisclosure(); 
  return (
    <AppShell
      className={classes.root}
      header={{ height: 'auto' }}
    >
      <AppShell.Header className={classes.header}>
        <Header toggle={toggle} />
      </AppShell.Header>
      <AppShell.Main className={classes.content}>
        <Outlet />
      </AppShell.Main>
    </AppShell >

  );
};

export default RootLayout;
