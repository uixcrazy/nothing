// tính phương thức mobile

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './index.style';

import jsf from 'json-schema-faker';
import faker from 'faker';
import Chance from 'chance';

import SlideCt from './SlideCt';
import HammerSliderCarousel from '../../components/slider/HammerSliderCarousel';
import BANNER_SCHEMA from '../../assets/json-schema-faker/blog-banner';
import POST_LIST_SCHEMA from '../../assets/json-schema-faker/blog-post-list';

class BlogApp extends Component {
  state = {
    dataBanner: null,
  }

  componentDidMount() {
    jsf.extend('faker', () => faker);
    jsf.extend('chance', () => new Chance());
    jsf.resolve(BANNER_SCHEMA).then((dataBanner) => {
      this.setState({dataBanner});
    });

    // jsf.resolve(POST_LIST_SCHEMA).then((dataPost) => {
    //   console.log(dataPost);
    // });
  }

  renderBanner(data) {
    if (data) {
      return data.map((item, index) => <SlideCt item={item} key={index}/>)
    }
  }

  render() {
    const { classes } = this.props;
    const bannerEl = this.renderBanner(this.state.dataBanner);
    return (
      <div className={classes.blogApp}>
        <div className={classes.slider}>
          <HammerSliderCarousel data={bannerEl} />
        </div>
      </div>
    )
  }
}

BlogApp.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(BlogApp);
