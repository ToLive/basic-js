const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const fieldWidth = matrix[0].length;
  const fieldHeight = matrix.length;

  const surroundCells = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];

  const field = Array.from({ length: fieldHeight }, () => Array.from({ length: fieldWidth }, () => 0));

  for (let i = 0; i < fieldHeight; i++)
    for (let j = 0; j < fieldWidth; j++)
      for (let [x, y] of surroundCells) {
        const neighborCell = matrix[i + y] ? matrix[i + y][j + x] : false;

        field[i][j] += (neighborCell) ? 1 : 0;
      }

  return field;
}

module.exports = {
  minesweeper
};
