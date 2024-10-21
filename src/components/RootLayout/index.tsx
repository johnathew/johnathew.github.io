import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import classes from './RootLayout.module.css';

const RootLayout = () => {


  return (
    <AppShell
      className={classes.root}
      header={{ height: 'auto' }}
    >
      <AppShell.Header className={classes.header}>
        <Header />
      </AppShell.Header>
      <AppShell.Main className={classes.content}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default RootLayout;
