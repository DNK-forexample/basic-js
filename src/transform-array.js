const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
  throw new Error("'arr' parameter must be an instance of the Array!") ;
}
  const result = [];
 function isDiscardNext(el) {
 if (arr.lastIndexOf('--discard-next') === arr.length - 1) {
 return result;
 } else if (arr[i] === '--discard-next' && arr[i + 2] === '--discard-prev' || 
            arr[i] === '--discard-next' && arr[i + 2] === '--double-prev') {
   i += 2;
 }
   
   else {
     i += 2;
       return result.push(arr[i]);
 } 
  }
  
 function isDiscardPrev(el) {
     if (arr[0] === '--discard-prev') {
 } else {
   return result.pop();
 }
 }
 
  function isDoubleNext(el) {
    if (arr.lastIndexOf('--double-next') === arr.length - 1) {
 return result;
    } else {
    i++;
      result.push(arr[i], arr[i]);
  }
  }
  
  function isDoublePrev(el) {
         if (arr[0] === '--double-prev') {
           
 } else {
   return result.push(arr[i - 1]);
 }   
 } 

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
      result.push(arr[i]);
    } else if (arr[i] === '--discard-next') {
      isDiscardNext();
    } else if (arr[i] === '--discard-prev') {
      isDiscardPrev();
    } else if (arr[i] === '--double-next') {
      isDoubleNext();
    } else if (arr[i] === '--double-prev') {
     isDoublePrev();
    }
    
  }
  return result;
}

module.exports = {
  transform
};
