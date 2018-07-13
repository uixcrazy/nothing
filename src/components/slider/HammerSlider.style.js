const btnNav = {
  position: 'absolute',
  top: 'calc(50% - 27px)',
  cursor: 'pointer',

  color: "#f5f5f5",
  fontSize: 28,
  display: 'block',
  lineHeight: '54px',
  width: 54,
  height: 54,
  border: '2px solid #f5f5f5',
  background: 'transparent',
  '&:disabled': { // https://www.w3schools.com/cssref/sel_disabled.asp
    opacity: 0.5,
  }
}

export default (theme) => ({
  wrap: {
    width: '100%',
    height: '100%',
  },
  hammer: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  slider: {
    display: 'flex',
    // flexWrap: 'wrap',
    transition: 'transform 400ms cubic-bezier(0.5, 0, 0.5, 1)',
    height: '100%',
  },
  slide: {
    background: '#fff',
    flex: '1 0 0',
    position: 'relative',
  },
  slideCt: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: '100%',
  },
  figureImage: {
    display: 'block',
    width: '100%',
  },
  figcaption: {
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    padding: 10,
    fontWeight: 300,
    fontSize: 26,
    letterSpacing: '1px',
  },
  btnPrev: {
    extend: btnNav,
    left: 10,
  },
  btnNext: {
    extend: btnNav,
    right: 10,
  }
});
