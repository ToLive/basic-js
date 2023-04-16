const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const res = [];
  const temp = s2.split('');

  s1.split('').map((char) => {
    if (temp.includes(char)) {
      res.push(char);

      temp[temp.indexOf(char)] = '';
    }
  })

  return res.length;
}

module.exports = {
  getCommonCharacterCount
};
