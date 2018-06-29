import React, { Component } from 'react';
import ListPhotos from '../components/unsplash/ListPhotos';
import SiteMain from '../components/layout/SiteMain';
import PageTitle from '../components/layout/PageTitle';

export default class AboutUsPage extends Component {
  render() {
    return (
      <SiteMain>
        <PageTitle>About Us</PageTitle>
        <ListPhotos />
      </SiteMain>
    );
  }
}
