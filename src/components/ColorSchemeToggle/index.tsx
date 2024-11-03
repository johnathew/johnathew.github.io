import cx from 'clsx';
import { useMantineColorScheme, ActionIcon, useComputedColorScheme, Group, Tooltip } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import classes from './ColorSchemeToggle.module.css';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  return (
    <Group justify="center">
      <ActionIcon
        component="button"
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="transparent"
        color={colorScheme === 'dark' ? 'var(--mantine-color-blue-5)' : 'var(--mantine-color-orange-6)'}
        size="md"
        aria-label="Toggle color scheme"
        mt={2}
      >
        <Tooltip label="Toggle color scheme">
          <IconMoonStars className={cx(classes.icon, classes.dark)} stroke={1.7} />
        </Tooltip>
        <Tooltip label="Toggle color scheme">
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.7} />
        </Tooltip>
      </ActionIcon>
    </Group>
  );
}
