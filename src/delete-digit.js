const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let str = String(n);
  let arr = str.split('');
  console.log(arr);
 let result = [];
  arr.forEach((el,i,array) => {
    let elements = [...array];
    elements.splice(i, 1);
    result.push(+elements.join(''));
    console.log(result);
  })
  return Math.max(...result);
}

console.log(deleteDigit(15872));

module.exports = {
  deleteDigit
};
