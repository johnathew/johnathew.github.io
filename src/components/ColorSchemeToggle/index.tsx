import { useMantineColorScheme, ActionIcon, useComputedColorScheme, Group } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import classes from './ColorSchemeToggle.module.css';
import cx from 'clsx';
import { motion } from 'framer-motion';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  return (
    <Group justify="center">
      <motion.div whileHover={{
        scale: 1.1,
        transition: { type: 'ease', stiffness: 500, },
        backgroundColor: colorScheme === 'dark' ? 'var(--mantine-color-gray-7)' : 'var(--mantine-color-orange-2)',
        borderRadius: '10px'
      }} style={{ borderRadius: '20px' }} >
        <ActionIcon
          component='button'
          onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
          variant="transparent"
          color={colorScheme === 'dark' ? 'var(--mantine-color-blue-2)' : 'var(--mantine-color-orange-5)'}
          size="md"
          aria-label='Toggle color scheme'
        >
          <IconMoonStars className={cx(classes.icon, classes.dark)} stroke={1.3} />
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        </ActionIcon>
      </motion.div>
    </Group >
  );
}
