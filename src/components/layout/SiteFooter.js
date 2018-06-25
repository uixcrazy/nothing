import React from 'react';
import injectSheet from 'react-jss';

const styles = (theme) => ({
  siteFooter: {
    flexShrink: 0,

    fontFamily: theme.secondaryFont,
    background: theme.backgroundColor,
    fontSize: '.625rem',
    lineHeight: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '.125em',
    textAlign: 'center',
    borderTop: '1px solid #c9c9c9',
    padding: '1rem',
  }
});

const SiteFooter = ({ classes }) => (
  <footer className={classes.siteFooter}>
    <p>Copyright © 2018 DaiLe</p>
  </footer>
)

export default injectSheet(styles)(SiteFooter);
