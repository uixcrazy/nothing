/**
 * http://hgoebl.github.io/mobile-detect.js/doc/MobileDetect.html
 */

import MobileDetect from 'mobile-detect';

export const isMobile = (() => {
  const md = new MobileDetect(window.navigator.userAgent);
  // if(window.innerWidth <= 800 && window.innerHeight <= 600) {
  return md.phone() ? true : false;
})();