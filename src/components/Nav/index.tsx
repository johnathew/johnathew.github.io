/* eslint-disable react/jsx-indent-props */
import { NavHashLink } from 'react-router-hash-link';
import classes from './Nav.module.css';
import { nav } from '../../data/navData';

const scrollFn = (el: any) => {
    const yOffset = -50;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
};

type NavProps = {
    hide: () => void;
};
const Nav = ({ hide }: NavProps) => {
    const navItems = nav.map((item) => (
        <NavHashLink
            smooth
            scroll={scrollFn}
            to={item.to}
            key={item.name}
            onClick={hide}
            className={classes.navLink}
        >
            <p className={classes.text}>{item.name}</p>
        </NavHashLink>
    ));
    return (
        <div className={classes.navContainer}>
            {navItems}
        </div>
    );
};

export default Nav;
