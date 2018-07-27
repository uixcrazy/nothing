// tính phương thức mobile

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getData from '../../core/fetch-api';
import {
  ENDPOINTS,
  API_UNSPLASH,
  HEADERS_UNSPLASH,
} from '../../core/constants';
import { prettifyNumber } from '../../core/utils';
import PageTitle from '../layout/PageTitle';
import ListPhotos from './ListPhotos';
import injectSheet from 'react-jss';
import styles from './index.style';

class UnsplashApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      topic: 'autumn',
      otherInfo: {},
    };
    this.handleClickTag = this.handleClickTag.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({
      isLoaded: false,
    });

    // fetch('https://api.unsplash.com/search?query=autumn&xp=&per_page=10&page=5&client_id=9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251').then(response => response.json()).then((jsonData) => {
    //   console.log('using a client_id query parameter:', jsonData);
    // });

    return getData({
      apiURL: API_UNSPLASH,
      // change API /search?query=autumn&xp=&per_page=20
      endpoint: ENDPOINTS.unsplashSearch,
      headers: HEADERS_UNSPLASH,
      params: {
        query: this.state.topic,
        xp: '',
        per_page: 10,
        page: 5,
      }})
      .then((jsonData) => {
        console.log(jsonData);
        this.setState({
          isLoaded: true,
          ...(jsonData.errors
            ? { error: {message: jsonData.errors.join(', ')} }
            : {
              items: jsonData.photos.results,
              otherInfo: {
                totalCollections: jsonData.collections.total,
                totalPhotos: jsonData.photos.total,
                totalPhotographer: jsonData.users.total,
                relatedSearches: jsonData.related_searches,
              }
            }
          ),
        });
      });
  }

  handleClickTag(item) {
    const topicTitle = item.title;
    if (this.state.topic === topicTitle)
      return;
    this.setState({ topic: topicTitle });
    this.getData(topicTitle);
  }

  render() {
    const { classes } = this.props;
    const { error, isLoaded, items, topic, otherInfo } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    } else {
      return (
        <Fragment>
          <PageTitle>Topic: {topic}</PageTitle>
          <header>
            <div className={classes.otherInfo}>
              {/* 6.6kPhotos2.8kCollections168Users */}
              <div className={classes.otherInfoItem}>
                {
                  otherInfo.totalPhotos
                    ? prettifyNumber(otherInfo.totalPhotos)
                    : '...' // se thay thế bằng loading
                }
                <span className={classes.otherIfItemLabel}>Photos</span>
              </div>
              <div className={classes.otherInfoItem}>
                {prettifyNumber(otherInfo && otherInfo.totalCollections)}
                <span className={classes.otherIfItemLabel}>Collections</span>
              </div>
              <div className={classes.otherInfoItem}>
                {prettifyNumber(otherInfo && otherInfo.totalPhotographer)}
                <span className={classes.otherIfItemLabel}>Photographers</span>
              </div>
            </div>

          </header>
          <ListPhotos
            isLoaded={isLoaded}
            listPhotos={items}
            handleClickTag={this.handleClickTag}
          />
        </Fragment>
      );
    }
  }
}

UnsplashApp.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(UnsplashApp);
