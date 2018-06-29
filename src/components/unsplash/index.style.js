export default (theme) => ({
  otherInfo: {
    fontFamily: '"Archivo", sans-serif',
    marginBottom: 20,
    display: 'flex',
    color: '#777',
  },
  otherInfoItem: {
    padding: {
      right: 20,
    },
    fontSize: 18,
  },
  otherIfItemLabel: {
    marginLeft: 5,
    color: '#999',
  },
  '@media only screen and (max-width: 414px)': { // mobile
    otherInfoItem: {
      fontSize: 16,
      lineHeight: 1.5,
    },
    otherIfItemLabel: {
      display: 'block',
      marginLeft: 0,
    },
  },
});
