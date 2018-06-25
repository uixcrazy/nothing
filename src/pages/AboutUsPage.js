import React, { Component } from 'react';
import MainSection from '../components/MainSection';
import SiteMain from '../components/layout/SiteMain';
import PageTitle from '../components/layout/PageTitle';

export default class AboutUsPage extends Component {
  render() {
    return (
      <SiteMain>
        <PageTitle>About Us</PageTitle>
        <MainSection />
      </SiteMain>
    );
  }
}
