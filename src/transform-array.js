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
  if (!(arr instanceof Array)) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
  }

  const control = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ]

  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    // console.log(item);

    if (!control.includes(item)) {
      resultArray.push(item);

      continue;
    }

    if (item === '--discard-next') {
      i += 1;
      continue;
    }

    if (item === '--discard-prev') {
      if (i >= 2 && arr[i - 2] === '--discard-next') {
        continue;
      }

      resultArray.length > 0 ? resultArray.pop() : false;

      continue;
    }

    if (item === '--double-next') {
      if (arr[i + 1]) {
        resultArray.push(arr[i + 1]);
      }

      continue;
    }

    if (item === '--double-prev') {
      if (i >= 2 && arr[i - 2] === '--discard-next') {
        continue;
      }

      i > 0 ? resultArray.push(resultArray[i - 1]) : false;

      continue;
    }
  }

  return resultArray;
}

module.exports = {
  transform
};
