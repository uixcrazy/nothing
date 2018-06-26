import React from 'react';
import injectSheet from 'react-jss';

const styles = (theme) => ({
  notFound: {
    flex: '1 0 auto',
    background: theme.backgroundColor,
    align: 'center',
  }
});

const NotFound = ({ classes }) => (
  <div className={classes.notFound}>
    Not Found Data
  </div>
)

export default injectSheet(styles)(NotFound);
