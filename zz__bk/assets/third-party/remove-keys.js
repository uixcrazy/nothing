/**
 * Remove all specified keys from an object, no matter how deep they are.
 *
 * Source: https://gist.github.com/uixcrazy/4c27b5d6fc0df178451688fe18bfec01
 * @param obj The object from where you want to remove the keys
 * @param removeKeys An array of property names (strings) to remove
 * Return a new array
 */

function removeKeys(obj, rmKeys) {
  const _obj = Object.assign({}, obj);
  Object.keys(_obj).forEach(key => {
    // key:
    // value: _obj[key]
    if (rmKeys.indexOf(key) > -1) {
      delete _obj[key];
    }
    if (rmKeys.indexOf(key) === -1
      && typeof _obj[key] === 'object'
      && !Array.isArray(_obj[key])) {
      _obj[key] = removeKeys(_obj[key], rmKeys); // Recursive
    }
  })
  return _obj;
}
export default removeKeys;
