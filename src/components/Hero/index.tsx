import {
  Button,
  Group,
  Text,
  Stack,
  Container,
  Divider,
  rem,
  List,
  ThemeIcon,
  Image,
  Title,
  Flex,
} from '@mantine/core';
import { IconDownload, IconSchool } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './Hero.module.css';
import resumePic from '../../assets/images/jak.webp';
import Contact from '../Contact';
import HeroList from '../ui/HeroList';

const styles = {
  width: rem(15),
  height: rem(15),
};

const Hero = () => (
  <Container className={classes.mainContainer} id="home">
    <Stack className={classes.mainInfo}>
      <Title className={classes.title} id="home">
        Hello, I&apos;m...
        <br />
        <span className={classes.name}> <span>J</span>ohn A. <span>K</span>ornegay.</span>
      </Title>
      <Title className={classes.subtitle} order={4}>
        Software Developer
      </Title>
      <Flex className={classes.wrapper}>
        <Image
          src={resumePic}
          className={classes.image}
          loading='lazy'
          fallbackSrc="https://placehold.co/400x400?text=:)"
          alt="headshot photo"
        />
        <Contact />
      </Flex>
    </Stack>
    <Container className={classes.inner}>
      <div className={classes.content}>
        <Text className={classes.banner}>Education</Text>
        <Divider mb="xs" />
        <List pb={4}>
          <List.Item
            className={classes.listItem}
            icon={
              <ThemeIcon
                size={20}
                radius="md"
                variant="filled"
                className={classes.icon}
              >
                <IconSchool
                  style={styles}
                  stroke={2}
                />
              </ThemeIcon>
            }
          >
            <b>Master of Science in Computer Science</b><br />
            University of Texas Rio Grande - McAllen, TX
          </List.Item>
          <List.Item
            className={classes.listItem}
            icon={
              <ThemeIcon
                size={20}
                radius="md"
                variant="outline"
                className={classes.icon}
              >
                <IconSchool
                  style={styles}
                  stroke={2}
                />
              </ThemeIcon>
            }
          >
            <b>Bachelor of Science in Molecular and Cell Biology</b><br />
            University of Texas A&M  - College Station, TX
          </List.Item>
        </List>
        <Text className={classes.banner}>Feats</Text>
        <Divider mb="md" />
        <HeroList />
        <Group mt={20}>
          <Button radius="sm" size="xs" className={classes.control}>
            <Link
              style={{
                textDecoration: 'none', color: 'var(--mantine-color-gray-1)',
              }}
              to="https://drive.google.com/file/d/1IDtuAOY6QwitrzEDikXShbAl4URbG9NJ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <IconDownload
                stroke={3}
                style={{
                  width: rem(12),
                  height: rem(12),
                  marginLeft: '5px',
                }}
              />
            </Link>
          </Button>
        </Group>
      </div>
    </Container>
  </Container>
);

export default Hero;
// TODO: add link to download resume PDF
