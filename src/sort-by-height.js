const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const baseArray = arr.slice(0);

  const newArr = arr.sort((a, b) => a - b).filter((value) => value !== -1);

  const newArray = baseArray.map((item) => item !== -1 ? newArr.shift() : -1);

  return newArray;
}

module.exports = {
  sortByHeight
};
