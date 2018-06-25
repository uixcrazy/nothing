import React from 'react';
import injectSheet from 'react-jss';

const styles = (theme) => ({
  titleOfPage: {
    fontFamily: theme.secondaryFont,
    color: theme.colorPrimary,
    fontSize: '2.25rem',
    fontWeight: 500,
  }
});

const PageTitle = ({ classes, children }) => (
  <h1 className={classes.titleOfPage}>{children}</h1>
)

export default injectSheet(styles)(PageTitle);
