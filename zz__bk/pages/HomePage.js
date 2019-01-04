import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import Button, { ButtonGroup } from '@atlaskit/button';
import MainSection from '../components/MainSection';
import SiteMain from '../components/layout/SiteMain';
import PageTitle from '../components/layout/PageTitle';

export default class HomePage extends Component {
  static contextTypes = {
    showModal: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
  };

  render() {
    return (
      <SiteMain>
        <PageTitle>Home</PageTitle>
        <MainSection />
        <div>
          <button
            appearance="primary"
            onClick={this.context.showModal}
            onClose={() => { }}
          >Click to view Atlaskit modal</button>
        </div>
      </SiteMain>
    );
  }
}
