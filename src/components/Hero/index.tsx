import {
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Divider,
} from '@mantine/core';
import { IconCheck, IconChevronRight } from '@tabler/icons-react';
import { Image } from '@mantine/core';
import classes from './Hero.module.css';
import profilePic from '/profilePic.png';

export function Hero() {
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <Image src={profilePic} radius="md" className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>
            Hello, my name is <br /> <span className={classes.highlight}>John Kornegay.</span>
          </Title>
          <Text mt='xs' className={classes.goal} > Frontend Developer</Text>
          <Text mt="sm" className={classes.objective}>
            A highly motivated individual with a passion for web development and a desire to learn
            new skills.
          </Text>
          <Divider my="lg" size="sm"/>
          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconChevronRight
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={3}
                  color="var(--mantine-color-white)"
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Self Taught</b> – Utilizing online resources, I have become proficient with HTML,
              CSS, Javascript/Typescript, and React
            </List.Item>
            <List.Item>
              <b>Discipline</b> – I have been working on my own projects and learning new skills
            </List.Item>
            <List.Item>
              <b>Focus</b> – I am looking for a job as a web developer
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}
