// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

module.exports = function(namespace) {
	return console.log.bind(null, namespace)
}