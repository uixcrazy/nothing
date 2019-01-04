/*
* getData
* error: data like that ```jsonData.errors```
____  {
____    "errors": ["Username is missing", "Password cannot be blank"]
____  }
*
*/
import { paramsToQueryStr } from './utils';

const getData = ({
  apiURL,
  endpoint,
  headers = {},
  params = {}}) => {
  return fetch(`${apiURL}${endpoint}?${paramsToQueryStr(params)}`, {
    headers: Object.assign({}, {
      'Content-Type': 'application/json',
    }, headers),
    method: 'GET',
  }).then(res => {
    const jsonData = res.json();
    // if (jsonData.errors) {
    //   console.log('%c---------', 'background: #222; color: #bada55');
    //   console.log(`%c${jsonData.errors.join('  ↚ ↛ ')}`, 'background: #222; color: #bada55');
    //   console.log('%c---------', 'background: #222; color: #bada55');
    // }
    return jsonData;
  }).catch(error => console.error('Error:', error))
}

export default getData;
