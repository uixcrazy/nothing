import React from 'react';
import injectSheet from 'react-jss';

const styles = (theme) => ({
  siteMain: {
    flex: '1 0 auto',
    background: theme.backgroundColor,

    color: '#555',
    padding: {
      top: 5,
      right: theme.paddingLeftRight,
      bottom: 5,
      left: theme.paddingLeftRight,
    },
  }
});

const SiteMain = ({ classes, children }) => (
  <div className={classes.siteMain}>
    {children}
  </div>
)

export default injectSheet(styles)(SiteMain);
