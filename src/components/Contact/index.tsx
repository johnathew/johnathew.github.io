import { Flex, Group, Text, ThemeIcon, rem } from '@mantine/core';
import { IconMail, IconMapPin, IconSun } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './Contact.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  link: string;
  description: React.ReactNode;
}

const contactData = [
  { description: 'Email', icon: IconMail, link: 'mailto:jakornegay01@gmail.com' },
  { description: 'McAllen, TX', icon: IconMapPin, link: '' },
];

function ContactIcon({ icon: Icon, description, link, ...others }: ContactIconProps) {
  const emailLink = link === 'mailto:jakornegay01@gmail.com' ? 'auto' : 'none';

  return (
    <div className={classes.wrapper} {...others}>
      <Link to={link} style={{ textDecoration: 'none', pointerEvents: emailLink }}>
        <Group>
          <ThemeIcon size={20} radius="md" variant="outline" className={classes.icon}>
            <Icon
              style={{
                width: rem(15),
                height: rem(15 * 1.5),
                color: 'light-dark(var(--mantine-color-dark-9), var(--mantine-color-orange-2))',
              }}
            />
          </ThemeIcon>
          <Text className={classes.description}>{description}</Text>
        </Group>
      </Link>
    </div>
  );
}

const Contact = () => {
  const items = contactData.map((item, index) => <ContactIcon key={index} {...item} />);
  return (
    <>
      <Group gap="md" className={classes.contactGroup}>
        {items}
      </Group>
    </>
  );
};

export default Contact;
