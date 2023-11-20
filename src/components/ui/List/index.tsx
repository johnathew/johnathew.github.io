import { List, ThemeIcon, rem } from "@mantine/core";
import { IconBook2, IconBarbell, IconFocus, IconStar } from "@tabler/icons-react";
import classes from "./HeroList.module.css";

const styles = {
  width: rem(12),
  height: rem(12),
}


const HeroList = () => {
  return <List
    spacing="md"
    size="sm"
  >
    <List.Item className={classes.listItem} icon={<ThemeIcon size={20} radius="md" variant="outline" className={classes.icon}>
      <IconBook2
        style={styles}
        stroke={2}
      />
    </ThemeIcon>}>
      <b>Self-Taught</b> – Developed proficieny in HTML, CSS, JS/ TS, React through utilization of online resources
    </List.Item>
    <List.Item className={classes.listItem} icon={<ThemeIcon size={20} radius="md" variant="outline" className={classes.icon}>
      <IconBarbell
        style={styles}
        stroke={2}
      />
    </ThemeIcon>}>
      <b>Discipline</b> – Strong work ethic and excellent use of time management, organization, and prioritization skills
    </List.Item>
    <List.Item className={classes.listItem} icon={<ThemeIcon size={20} radius="md" variant="outline" className={classes.icon}>
      <IconFocus
        style={styles}
        stroke={2}
      />
    </ThemeIcon>}>
      <b>Focus</b> – Independently motivated to learn and practice new skills, and to apply them to real-world projects
    </List.Item>
    <List.Item className={classes.listItem} icon={<ThemeIcon size={20} radius="md" variant="outline" className={classes.icon}>
      <IconStar
        style={styles}
        stroke={2}
      />
    </ThemeIcon>}>
      <b>Self Hype man</b> – Able to speak confidently and greatly exaggerate my own skills and abilities when needed. I can also fly.
    </List.Item>
  </List>
};

export default HeroList;
