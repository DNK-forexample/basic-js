const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let arr = email.split('').reverse();
  console.log(arr);
let result = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== '@') {
      result.push(arr[i]);
    } else {
      break;
    }
  }
  return result.reverse().join('');
}

module.exports = {
  getEmailDomain
};
