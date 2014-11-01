// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://en.wikipedia.org/wiki/Fold_(higher-order_function) 

function countWords(inputWords) {
  return inputWords.reduce(function(previousValue, currentValue, index, array) {
  	previousValue[currentValue] = ++previousValue[currentValue] || 1
  	return previousValue
  }, {})
}

module.exports = countWords
