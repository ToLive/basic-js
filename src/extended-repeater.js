const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const inputStr = String(str);

  const defaultOptions = {
    separator: '+',
    additionSeparator: '|',
    repeatTimes: 1,
    additionRepeatTimes: 1
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options
  };

  const { repeatTimes, separator, additionSeparator, addition, additionRepeatTimes } = mergedOptions;

  if (!mergedOptions.repeatTimes) {
    return inputStr;
  }

  const baseStr = Array.from({ length: repeatTimes }, () => inputStr);
  //console.log(baseStr);
  const additionStr = addition !== undefined ? Array.from({ length: additionRepeatTimes }, () => String(addition)).join(String(additionSeparator)) : '';
  //console.log(additionStr);
  const baseStrWithAddition = baseStr.map((item) => `${item}${String(additionStr)}`).join(String(separator));

  return baseStrWithAddition;
}

module.exports = {
  repeater
};
