
import React from 'react';
import PropTypes from 'prop-types';
import ListTags from './ListTags';
import injectSheet from 'react-jss';
import styles from './ListPhotos.style';

const ListPhotos = ({ classes, isLoaded, listPhotos, handleClickTag }) => {
  if (!isLoaded) return <div>Loading...</div>
  // xu ly truong hop noData
  return (
    <section className={classes.listPhotos}>
      {listPhotos && listPhotos.map(item => (
        <figure key={item.id} className={classes.item}>
          <img className={classes.itemImage} src={item.urls.small} alt={item.id} />
          {
            item.description
              ? <figcaption className={classes.caption}>{item.description}</figcaption>
              : ''
          }
          <ListTags
            tags={item.photo_tags}
            handleClick={handleClickTag}
          />
        </figure>
      ))}
    </section>
  )
};

ListPhotos.propTypes = {
  classes: PropTypes.object,
  isLoaded: PropTypes.bool,
  listPhotos: PropTypes.array,
  handleClickTag: PropTypes.func,
};

export default injectSheet(styles)(ListPhotos);
