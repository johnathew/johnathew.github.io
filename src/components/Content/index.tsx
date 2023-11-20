export default Content;
import cx from 'clsx';
import { useState } from 'react';
import { Box } from '@mantine/core';
import classes from './Content.module.css';
import { Link } from 'react-router-dom';



const links = [
    { label: 'Home', link: '#home', order: 1 },
    { label: 'Projects', link: '#projects', order: 1 },
    { label: 'Work History', link: '#work', order: 1 },
    { label: 'About', link: '#about', order: 1 },
];

export function Content() {
    const [active, setActive] = useState(0);

    const items = links.map((item, index) => (
        <Box
            component={Link}
            to={item.link}
            onClick={() => {
                setActive(index);
            }}
            key={item.label}
            className={cx(classes.link, { [classes.linkActive]: active === index })}
            style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
        >
            {item.label}
        </Box>
    ));

    return (
        <div className={classes.root}>
            <div className={classes.links}>
                <div
                    className={classes.indicator}
                    style={{
                        transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
                    }}
                />
                {items}
            </div>
        </div>
    );
}