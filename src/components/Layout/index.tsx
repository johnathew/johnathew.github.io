import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from '../Header';
import classes from './Layout.module.css';

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      layout="default"
      header={{ height: 60 }}
      navbar={{ width: 0, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
      transitionDuration={300}
    >
      <AppShell.Header className={classes.header}>
        <Header toggle={toggle}/>
      </AppShell.Header>
      <AppShell.Navbar className={classes.navbar}>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
