const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(arr) {
    return arr.reduce((sum, e) => {
      if (Array.isArray(e)) {
        const sumDeep = 1 + this.calculateDepth(e);
        if (sumDeep > sum) {
          sum = sumDeep;
          return sum;
        } else {
          return sum;
        }
      } else {
        return sum;
      }
    }, 1);
  }

}

module.exports = {
  DepthCalculator
};
