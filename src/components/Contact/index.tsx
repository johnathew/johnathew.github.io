import { Group, Title, Box, Text, rem, Divider, Paper, Space, Stack } from '@mantine/core';
import { IconAt, IconPhone, IconSun } from '@tabler/icons-react';
import classes from './Contact.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Group>
        <Icon style={{ width: rem(14), height: rem(14), color: 'var(--mantine-color-blue-7)' }} />
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </Group>
    </div>
  );
}

const contactData = [
  { title: 'Email:', description: 'Jakornegay01@gmail.com', icon: IconAt },
  { title: 'Phone:', description: '(956) 279-3154', icon: IconPhone },
];

const Contact = () => {
  const items = contactData.map((item, index) => <ContactIcon key={index} {...item} />);
  return (
    <Paper className={classes.contact} p="xs" radius="md" withBorder>
      <Title order={5} className={classes.title}>
        Contact Information
      </Title>
      <Divider mb="xs" mr="xl" />
      <Group>{items}</Group>
    </Paper>
  );
};

export default Contact;
