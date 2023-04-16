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
  const resArr = [];

  const newStr = str.split('');

  newStr.map((char) => {
    if (resArr.at(-1)) {
      const lastElem = resArr.at(-1)[0];

      if (lastElem === char) {
        resArr.at(-1).push(char);
      } else {
        resArr.push([char]);
      }
    } else {
      resArr.push([char]);
    }
  });

  return resArr.reduce((acc, val) => `${acc}${(val.length > 1 ? val.length : '')}${val[0]}`, '');
}

module.exports = {
  encodeLine
};
