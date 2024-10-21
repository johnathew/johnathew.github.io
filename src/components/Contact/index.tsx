import { Group, Text, rem } from '@mantine/core';
import { IconMail, IconMapPin, IconSun } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './Contact.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  link: string;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, description, link, ...others }: ContactIconProps) {
  const emailLink = link === 'mailto:jakornegay01@gmail.com' ? 'auto' : 'none';

  return (
    <div className={classes.wrapper} {...others}>
      <Link to={link} style={{ textDecoration: 'none', pointerEvents: emailLink }}>
        <Group>
          <Icon
            style={{
              width: rem(18),
              height: rem(18),
              color: 'var(--mantine-color-blue-6)',
              marginRight: rem(-5),
            }}
          />
          <Text className={classes.description}>{description}</Text>
        </Group>
      </Link>
    </div>
  );
}

const contactData = [
  { description: 'Jakornegay01@gmail.com', icon: IconMail, link: 'mailto:jakornegay01@gmail.com' },
  { description: 'McAllen, TX', icon: IconMapPin, link: '' },
];

const Contact = () => {
  const items = contactData.map((item, index) => <ContactIcon key={index} {...item} />);
  return (
    <Group gap="xs" mt={0}>{items}</Group>
  );
};

export default Contact;
