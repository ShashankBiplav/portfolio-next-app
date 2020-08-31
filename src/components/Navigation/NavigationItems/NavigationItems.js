import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../UI/Logo/Logo';

import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <div className={classes.NavigationDiv}>
        <Logo />
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/projects">Projects</NavigationItem>
            <NavigationItem link="/skills">Skills</NavigationItem>
            <NavigationItem link="/testimonials">Testimonials</NavigationItem>
        </ul>
    </div>
);

export default navigationItems;
