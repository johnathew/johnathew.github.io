import { useMantineColorScheme, ActionIcon, useComputedColorScheme, Group } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import classes from './ColorSchemeToggle.module.css';
import cx from 'clsx';
import { motion } from 'framer-motion';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Group justify="center">
      <motion.div whileHover={{
        scale: 1.2,
        transition: { type: 'ease', stiffness: 500, },
      }} style={{ borderRadius: '10px' }} >
        <ActionIcon
          onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
          variant="subtle"
          color={colorScheme === 'dark' ? 'var(--mantine-color-blue-2)' : 'var(--mantine-color-orange-9)'}
          size="lg"
          aria-label="Toggle color scheme"
        >
          <IconMoonStars className={cx(classes.icon, classes.dark)} stroke={1.5} />
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        </ActionIcon>
      </motion.div>
    </Group >
  );
}
