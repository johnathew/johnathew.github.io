import { Button, Group, rem, useMantineColorScheme } from '@mantine/core';
import { IconBulbFilled, IconBulbOff } from '@tabler/icons-react';

export function ColorSchemeButtons() {
  const { setColorScheme } = useMantineColorScheme();
  const lightIcon = <IconBulbFilled style={{ width: rem(20), height: rem(20) }} stroke={1.5} />;
  const darkIcon = <IconBulbOff style={{ width: rem(20), height: rem(20) }} stroke={1.5} />;

  return (
    <Group gap={2}>
      <Button
        variant="subtle"
        color="yellow"
        justify="center"
        onClick={() => setColorScheme('light')}
      >
        {lightIcon}
      </Button>
      <Button variant="subtle" color="blue" onClick={() => setColorScheme('dark')}>
        {darkIcon}
      </Button>
    </Group>
  );
}
