const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const reverse = domains.map((item) => item.split('.').reverse());
  const subs = reverse
    .map((item) => item.reduce((acc, val) => [...acc, `${acc.length > 0 ? acc.at(-1) : acc}.${val}`], []))
    .flat()
    .reduce((acc, val) => {
      if (acc[val] !== undefined) {
        acc[val] += 1;

        return acc;
      }

      acc[val] = 1;

      return acc;
    }, {});

  return subs;
}

module.exports = {
  getDNSStats
};
