import React from 'react';
import injectSheet from 'react-jss';
import { NavLink } from 'react-router-dom';
import styles from './SlideCt.style';

const SlideCt = ({ classes, item }) => (
  <figure className={classes.slideCt}>
    <NavLink
      to={item.link}
      activeClassName="current">
      <img className={classes.figureImage} src={item.photoUrl} alt={item.id} />
      <figcaption className={classes.figcaption}>{item.title}</figcaption>
    </NavLink>
  </figure>
)

export default injectSheet(styles)(SlideCt);