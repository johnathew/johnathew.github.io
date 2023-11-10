import { Group, Title, Text, rem, Divider, Paper } from '@mantine/core';
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
        <Icon
          style={{
            width: rem(16),
            height: rem(16),
            color: 'var(--mantine-color-blue-6)',
            marginRight: rem(-5),
          }}
        />
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
    <div>
      <Title order={5} className={classes.title}>
        Contact Information
      </Title>
      <Divider mb="xs" />
      <Group>{items}</Group>
    </div>
  );
};

export default Contact;
