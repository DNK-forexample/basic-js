const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = [];
  let num = 1;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
          num++;
      } else {
          if (num === 1) {
              arr.push(`${str[i]}`)
          } else {
              arr.push(`${num}${str[i]}`)
          }
          num = 1;
      }
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
