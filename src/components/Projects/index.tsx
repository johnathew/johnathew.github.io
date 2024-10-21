import { SimpleGrid, Text, Container, Paper, Badge, Group, ActionIcon, Tooltip, Box, Divider } from '@mantine/core';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Projects.module.css';
import Title from '../ui/Title';
import { projects } from '../../util/projectData';

const boxVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export function Projects() {
  const ref = useRef(null);
  const control = useAnimation();
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  const cards = projects.map((article) => (
    <Paper withBorder radius="md" className={classes.card} key={article.title}>
      <Group justify="space-between">
        <Group>
          {article.icon}
          <Text className={classes.cardTitle}>
            {article.title}
          </Text>
        </Group>
        <Box className={classes.control}>
          <Link to={article.to}>
            <Tooltip label={article.tooltipGH} events={{ hover: true, focus: true, touch: false }}>
              <motion.div whileHover={{ scale: 1.5, transition: { type: 'ease' } }}>
                <ActionIcon variant="transparent" color="blue" aria-label="Github link">
                  {article.ghLink}
                </ActionIcon>
              </motion.div>
            </Tooltip>
          </Link>
          <Link to={article.extLink}>
            <Tooltip label={article.tooltipExt} events={{ hover: true, focus: true, touch: false }}>
              <motion.div whileHover={{ scale: 1.5, transition: { type: 'ease' } }}>
                {article.extLinkIcon}
              </motion.div>
            </Tooltip>
          </Link>
        </Box>
      </Group>
      <Divider mt={10} />
      <Text size="sm" fw={300} opacity={0.9} mt="sm" mb="xs">
        {article.description}
      </Text>
      <Group gap="xs">
        {article.utilizes.map((technology) => (
          <Badge key={technology.tech} variant="light" className={classes.icon}>
            {technology.tech}
          </Badge>
        ))}
      </Group>
    </Paper>
  ));

  return (
    <motion.div
      variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={{ type: 'ease', duration: 0.6 }}
    >
      <Container id="projects" className={classes.mainWrapper}>
        <Title title="Projects" />
        <SimpleGrid className={classes.grid} ref={ref} cols={{ base: 1, sm: 2 }}>
          {cards}
        </SimpleGrid>
      </Container>
    </motion.div>
  );
}
