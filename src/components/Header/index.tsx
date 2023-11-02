import { useState } from 'react';
import { Container, Group, Burger, Center, Flex, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './Header.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function Header({ toggle }: { toggle: () => void }) {
  const [opened] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Container fluid size="md" className={classes.inner}>
      <Group visibleFrom="xs" className={classes.group}>
        <h2>JAK</h2>
        <Space h="" />
        <ColorSchemeToggle />
      </Group>
      <Center hiddenFrom="xs">
        <Burger opened={opened} onClick={toggle} size="sm" />
        <ColorSchemeToggle />
      </Center>
    </Container>
  );
}
