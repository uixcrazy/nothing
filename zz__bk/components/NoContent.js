import React from 'react';
import injectSheet from 'react-jss';

const styles = (theme) => ({
  noContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    display: 'block',
    maxWidth: 300,
    minHeight: 225,
  }
});

const NoContent = ({ classes }) => (
  <div className={classes.noContent}>
    <img className={classes.images}
      alt="No content available"
      src="https://unsplash.com/a/img/empty-states/photos.png" />
  </div>
)

export default injectSheet(styles)(NoContent);
