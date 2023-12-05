import { Flex, Container, useMantineColorScheme } from '@mantine/core';
import Title from '../ui/Title';
import classes from './TechComps.module.css';
import CompBadge from '../ui/CompBadge';
import { techBadgesData } from '../../util/data';



const TechComps = () => {
  const { colorScheme } = useMantineColorScheme();

  const badges = techBadgesData.map((badge) => {
    return <CompBadge key={badge.tech} label={badge.tech} icon={badge.badgeDark === undefined ? badge.badge : colorScheme === 'dark' ? badge.badgeDark : badge.badgeLight} color={badge.color} />
  });


  return (
    <Container p='md'>
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
