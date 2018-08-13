import React, { Component } from 'react';
import NoContent from '../components/NoContent';
import SiteMain from '../components/layout/SiteMain';
import BlogApp from '../components/blog'

export default class AboutUsPage extends Component {
  render() {
    return (
      <SiteMain>
        <BlogApp />
      </SiteMain>
    );
  }
}

// <NoContent />
