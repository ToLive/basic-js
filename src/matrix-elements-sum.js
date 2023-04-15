const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const matrixSize = matrix.length;
  const lineSize = matrix[0].length;

  let res = 0;

  for (let i = 0; i < matrixSize; i += 1) {
    for (let k = 0; k < lineSize; k += 1) {
      if (i - 1 >= 0 && matrix[i - 1][k] === 0) {
        continue;
      }

      res += matrix[i][k];
    }
  }

  return res;
}

module.exports = {
  getMatrixElementsSum
};
