import { Text } from "@mantine/core";
import classes from "./Title.module.css";

const Title = ({ title }: { title: string }) => {
    return <Text fw={700} className={classes.title}>{title}</Text>
};

export default Title;
