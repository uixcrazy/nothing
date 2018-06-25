import React from 'react';
import { NavLink } from 'react-router-dom';
import injectSheet from 'react-jss';
import styles from './SiteNav.style';

const SiteNav = ({ classes }) => {
  const navList = [
    // selected
    // {
    //   to: '/',
    //   name: 'Home',
    // },
    {
      to: '/eye-story',
      name: 'Eye Story',
    },
    {
      to: '/book-reviews',
      name: 'Book Reviews',
    },
    {
      to: '/about-us',
      name: 'About Us',
    },
  ]
  return (
    <nav className={classes.siteNav}>
      {
        navList.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={classes.siteNavItem}
            activeClassName="current">
            {item.name}
          </NavLink>
        ))
      }
    </nav>
  );
};

export default injectSheet(styles)(SiteNav);
