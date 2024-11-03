import { SimpleGrid, Text, Container, Paper, Badge, Group, ActionIcon, Tooltip, Box, Divider, Title } from '@mantine/core';
import classes from './Projects.module.css';
import { projects } from '../../data/projectData';

export function Projects() {
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
          <Tooltip
            label={article.tooltipGH}
            events={{ focus: true, hover: true, touch: true }}
          >
            <ActionIcon
              component="a"
              target="_blank"
              href={article.to}
              variant="transparent"
              aria-label="Github link"
            >
              {article.ghLink}
            </ActionIcon>
          </Tooltip>
          <Tooltip
            label={article.tooltipExt}
            events={{ focus: true, hover: true, touch: true }}
          >
            <ActionIcon
              component="a"
              target="_blank"
              href={article.extLink}
              variant="transparent"
              aria-label="External link"
            >
              {article.extLinkIcon}
            </ActionIcon>
          </Tooltip>
        </Box>
      </Group>
      <Divider mt={10} />
      <Text size="sm" fw={500} mt="sm" mb="xs">
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
    <Container id="projects" className={classes.mainWrapper}>
      <Title title="Projects" order={2}>
        # Projects
      </Title>
      <SimpleGrid className={classes.grid} cols={{ base: 1, sm: 2 }}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
