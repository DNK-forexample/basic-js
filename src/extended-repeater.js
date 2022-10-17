const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, { repeatTimes, separator = '+', addition , additionRepeatTimes, additionSeparator = '|' }) {
  if(typeof str !== 'string' && str !== undefined) {
    str = String(str);
  }
  if(typeof addition !== 'string' && addition !== undefined) {
    addition = String(addition);
  }
  let string = '';
  if(addition) {
    string = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  }
    
  return new Array(repeatTimes).fill(str + string).join(separator);
}

module.exports = {
  repeater
};
