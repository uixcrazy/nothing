
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getData from '../../core/fetch-api';
import {
  ENDPOINTS,
  API_UNSPLASH,
  HEADERS_UNSPLASH,
} from '../../core/constants';
import PageTitle from '../layout/PageTitle';
import ListTags from './ListTags';
import injectSheet from 'react-jss';
import styles from './ListPhotos.style';

class ListPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      topic: null,
    };
    this.handleClickTag = this.handleClickTag.bind(this);
  }

  componentDidMount() {
    this.getData('autumn');
  }

  getData(topic) {
    if (this.state.topic === topic)
      return;
    this.setState({
      isLoaded: false,
    });
    return getData({
      apiURL: API_UNSPLASH,
      // change API /search?query=autumn&xp=&per_page=20
      endpoint: ENDPOINTS.unsplashSearchPhotos,
      headers: HEADERS_UNSPLASH,
      params: {
        query: topic,
        xp: '',
        per_page: 10,
        page: 5,
      }})
      .then((jsonData) => {
        console.log(jsonData);
        this.setState({
          isLoaded: true,
          topic,
          ...(jsonData.errors
            ? { error: {message: jsonData.errors.join(', ')} }
            : { items: jsonData.results }
          ),
        });
      });
  }

  handleClickTag(item) {
    console.log('handleClickTag', item);
    this.getData(item.title);
  }

  render() {
    const { classes } = this.props;
    const { error, isLoaded, items, topic } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Fragment>
          <PageTitle>Topic: {topic}</PageTitle>
          <section className={classes.listPhotos}>
            {items && items.map(item => (
              <figure key={item.id} className={classes.item}>
                <img className={classes.itemImage} src={item.urls.small} alt={item.id} />
                {
                  item.description
                    ? <figcaption className={classes.caption}>{item.description}</figcaption>
                    : ''
                }
                <ListTags
                  tags={item.photo_tags}
                  handleClick={this.handleClickTag}
                />
              </figure>
            ))}
          </section>
        </Fragment>
      );
    }
  }
}

ListPhotos.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(ListPhotos);
