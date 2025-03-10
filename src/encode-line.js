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
  return str.replace(/(\w)\1+/ig, (match) => {
    return `${match.length}${match[0]}`
  })
}

module.exports = {
  encodeLine
};
