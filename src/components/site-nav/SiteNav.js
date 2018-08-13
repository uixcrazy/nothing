import React from 'react';
import { NavLink } from 'react-router-dom';
import injectSheet from 'react-jss';
import styles from './SiteNav.style';

import { NAV_LIST } from './constants';

const SiteNav = ({ classes }) => {

  return (
    <nav className={classes.siteNav}>
      {
        NAV_LIST.map((item, index) => (
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
