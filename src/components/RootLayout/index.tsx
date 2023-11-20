import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from '../Header';
import classes from './RootLayout.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToHashElement from '../../utils/ScrolltoHashElement';
import { useLocation, Outlet } from 'react-router-dom';
import Content from '../Content';
import { useState } from 'react';


const RootLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  const locationArr = location.pathname?.split('/')[1];
  const isHome = location.pathname === '/';

  const container = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, },
    exit: { opacity: 1, x: 300 }
  }

  return (
    <AppShell
      className={classes.root}
      header={{ height: 60 }}
      navbar={{ width: 170, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !opened } }}

    >
      <AppShell.Header className={classes.header}>
        <Header toggle={toggle} />
      </AppShell.Header>
      <AppShell.Navbar className={classes.navbar}>
        <Content />
      </AppShell.Navbar>
      <AppShell.Main className={classes.content}>
        <AnimatePresence mode='wait'>
          <motion.div key={isHome ? 'home' : locationArr}
            variants={container} animate='visible' initial='hidden' transition={{ type: 'ease', duration: 0.8, }} >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </AppShell.Main>
      <ScrollToHashElement />
    </AppShell >

  );
};

export default RootLayout;
