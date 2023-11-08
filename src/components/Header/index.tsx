import { useState } from 'react';
import { Container, Group, Burger, Text } from '@mantine/core';
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
        <Text fw={500} size="xl">
          JAK Resume
        </Text>
        <ColorSchemeToggle />
      </Group>
      <Group
        hiddenFrom="xs"
        style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
      >
        <Burger opened={opened} onClick={toggle} size="sm" aria-label="Toggle navigation" />
        <Text fw={700} size="lg">
          JK Resume
        </Text>
        <ColorSchemeToggle />
      </Group>
    </Container>
  );
}
