export default (theme) => ({
  tags: {
    fontFamily: theme.primaryFont,
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
  },
  item: {
    margin: {
      right: 8,
      top: 10,
    },
    color: '#999',
    backgroundColor: '#f1f1f1',
    padding: {
      top: 6,
      right: 8,
      bottom: 4,
      left: 8,
    },
    borderRadius: 3,
    fontSize: 13,
    letterSpacing: 1,
    textDecoration: 'none',
    transition: 'all .1s ease-in-out',
    textTransform: 'capitalize',
  }
});
