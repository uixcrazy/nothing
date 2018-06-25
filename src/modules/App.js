import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import SiteHeader from '../components/layout/SiteHeader';
import SiteFooter from '../components/layout/SiteFooter';
import injectSheet, { ThemeProvider } from 'react-jss'
import '../assets/styles/normalize.css';
import '../assets/styles/nothing_reset.css';

const theme = {
  colorPrimary: '#121212',
  backgroundColor: '#fefefe',
  paddingLeftRight: '1rem',
  primaryFont: '',
  secondaryFont: '"Montserrat", sans-serif'
}

const styles = {
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // height: '100vh',
  }
};

class App extends Component {
  // state = {
  //   isModalOpen: false,
  // };

  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.app}>
          <SiteHeader />
          {this.props.children}
          <SiteFooter />
          {/* StarterNavigation */}
          {/* modal */}
          {/* Flag / Notification */}
          {/* footer */}
        </div>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object,
  navOpenState: PropTypes.object,
  onNavResize: PropTypes.func,
  children: PropTypes.node,
};

export default injectSheet(styles)(App);
