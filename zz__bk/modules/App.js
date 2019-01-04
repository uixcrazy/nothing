import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import SiteHeader from '../components/layout/SiteHeader';
import SiteFooter from '../components/layout/SiteFooter';
import injectSheet, { ThemeProvider } from 'react-jss';
import { isMobile } from '../core/mobile-detect';
import { VARS, BREAKPOINTS, LAYOUT_MAXWIDTH } from '../assets/styles/variables.style';
import '../assets/styles/normalize.css';
import '../assets/styles/nothing_reset.css';

const theme = Object.assign({},
  VARS,
  {
    breakpoints: BREAKPOINTS,
    layoutMaxWidth: LAYOUT_MAXWIDTH
  },
  /*, and other function */)

const styles = {
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
};

class App extends Component {
  render() {
    // console.log(isMobile);
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.app}>
          <SiteHeader />
          {this.props.children}
          <SiteFooter />
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
