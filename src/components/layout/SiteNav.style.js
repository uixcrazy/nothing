export default (theme) => ({
  siteNav: {
    display: 'flex',
    justifyContent: 'flex-end',
    transition: 'transform 400ms cubic-bezier(0.5, 0, 0.5, 1)',
  },
  siteNavItem: {
    position: 'relative',
    padding: '1rem',
    flexShrink: 0, /* flex: 1 0 auto; */

    fontFamily: theme.secondaryFont,
    color: theme.colorPrimary,
    textTransform: 'uppercase',
    fontSize: '0.625rem',
    fontWeight: 600,
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.6,
    },
    '&.current:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: '12.5%',
      bottom: '.75em',
      height: '1px',
      width: '75%',
      background: theme.colorPrimary,
    }
  },
});
