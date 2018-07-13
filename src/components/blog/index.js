// tính phương thức mobile

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './index.style';

import jsf from 'json-schema-faker';
import faker from 'faker';
import Chance from 'chance';

import HammerSlider from '../../components/slider/HammerSlider';
import { BANNER_SCHEMA } from '../../assets/json-schema-faker/blog-banner';
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

    jsf.resolve(POST_LIST_SCHEMA).then((dataPost) => {
      console.log(dataPost);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.blogApp}>
        <div className={classes.slider}>
          <HammerSlider data={this.state.dataBanner} />
        </div>
      </div>
    )
  }
}

BlogApp.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(BlogApp);
