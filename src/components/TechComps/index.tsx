import { Flex, Container } from '@mantine/core';
import Title from '../ui/Title';
import classes from './TechComps.module.css';
import CompBadge from '../ui/CompBadge';
import { techBadgesData } from '../../util/projectData';

const TechComps = () => {
  const badges = techBadgesData.map((badge) => {
    return (
      <CompBadge key={badge.tech} label={badge.tech} icon={badge.badge} color={badge.color} />
    )
  });

  return (
    <Container className={classes.mainWrapper}>
      <Title title='Technical Competencies' />
      <Flex
        mih={100}
        gap="xl"
        justify="space-evenly"
        align="center"
        wrap='wrap'
        mt='md'
        className={classes.techComps}
      >
        {badges}
      </Flex>
    </Container>);
};

export default TechComps;
