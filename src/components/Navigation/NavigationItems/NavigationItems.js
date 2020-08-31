import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/projects">Projects</NavigationItem>
        <NavigationItem link="/skills">Skills</NavigationItem>
        <NavigationItem link="/testimonials">Testimonials</NavigationItem>
    </ul>
);

export default navigationItems;
