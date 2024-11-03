import { Group, Stack, Image, Flex, Text, Space } from "@mantine/core";
import resumePic from '../../assets/images/jak.png';
import classes from './MyspaceMain.module.css'

export function MyspaceMain() {

    return (
        <Flex bg='green' justify="center"
            align="center"
            direction="row"
            gap='xl'
            p={10}>
            <Stack className={classes.stackOne}>
                <Text mt="xs" size='lg' fw={500}>John</Text>
                <Image src={resumePic} className={classes.image} />
                <Group>View My: Pics | Videos</Group>
            </Stack>
            <Stack className={classes.stackTwo}>
                <Text className={classes.text}>
                    ":{`)`}"
                    <br />
                    30 Years Old
                    <br />
                    Male
                    <br />
                    McAllen, TX
                    <br />
                    United States
                </Text>
                <Text className={classes.text}>
                    Last Login:
                    <br />
                    8/27/2006
                </Text>
            </Stack>
        </Flex>

    )
}