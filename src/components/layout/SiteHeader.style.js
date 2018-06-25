// import breakPoint from './breakpoint.style';

export default (theme) => ({
// const standardStyle = {
  siteHeader: {
    display: 'flex',
    color: '#757575',
    background: theme.backgroundColor,
    alignItems: 'center',
    padding: {
      top: '2rem',
      right: theme.paddingLeftRight,
      bottom: '1rem',
      left: theme.paddingLeftRight,
    },
  },
  branding: {
    '& > a': {
      height: '1.75rem',
      width: '14.94187rem',
      display: 'block',
      backgroundImage: 'url(https://shentonista.sg/app/themes/shentonista-theme/assets/images/shentonista-logo.svg)',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      fontSize: 0,

      backgroundColor: '#222',
    }
  },
  contentMenu: {
    flex: '1 0 0',
  }
});

// export default (theme) => {
//   const backgroundColor = theme.backgroundColor;
//   const customStyle = backgroundColor.callFnc();
//   return Object.assign({}, standardStyle, customStyle);
// };
