
export function paramsToQueryStr(params) {
  return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
}

export function prettifyNumber(value) {
  var thousand = 1000;
  var million = 1000000;
  var billion = 1000000000;
  var trillion = 1000000000000;
  if (value < thousand) {
    return String(value);
  }

  if (value >= thousand && value <= million) {
    return  (value/thousand).toFixed(1) + 'k';
  }

  if (value >= million && value <= billion) {
    return Math.round(value/million) + 'M';
  }

  if (value >= billion && value <= trillion) {
    return Math.round(value/billion) + 'B';
  }

  else {
    return Math.round(value/trillion) + 'T';
  }
}

