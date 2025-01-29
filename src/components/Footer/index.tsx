import classes from "./Footer.module.css"
import { Container } from "@mantine/core";
import diegoNMe from "../../assets/images/diegoNMe.png"
import { c } from "vite/dist/node/types.d-aGj9QkWt";

export const Footer = () => {
    return <Container className={classes.mainContainer}>
        <picture className={classes.pic}>
            <img src={diegoNMe} alt="my dog and me" />
        </picture></Container>;
};
