import { Flex, Container, Title } from '@mantine/core';
import classes from './TechComps.module.css';
import CompBadge from '../ui/CompBadge';
import { techBadgesData } from '../../data/projectData';

const TechComps = () => {
  const badges = techBadgesData.map((badge) => (
    <CompBadge
      key={badge.tech}
      label={badge.tech}
      icon={badge.badge}
      color={badge.color}
      alt={badge.alt}
    />
  )
  );

  return (
    <Container className={classes.mainWrapper} id="techComps">
      <Title order={2}>
        # Technologies
      </Title>
      <Flex
        mih={100}
        gap="xl"
        justify="space-evenly"
        align="center"
        wrap="wrap"
        mt="md"
        className={classes.techComps}
      >
        {badges}
      </Flex>
    </Container>
  );
};

export default TechComps;
