// https://en.wikipedia.org/wiki/Partial_application
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

function logger(namespace) {
  return function() {
  	console.log.apply(null, [namespace].concat(Array.prototype.slice.call(arguments)))
  }
}

module.exports = logger