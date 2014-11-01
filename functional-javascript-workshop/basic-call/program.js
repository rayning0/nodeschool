// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Array-like

// http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
// See "Borrowing Functions with Apply and Call (A Must Know)"
// Also helpful: http://stackoverflow.com/questions/15455009/js-call-apply-vs-bind

// The `arguments` variable, available in every function, is an *Object* that quacks like an *Array*:

function duckCount() {
	return Array.prototype.slice.call(arguments).filter(function(obj) {
		return Object.prototype.hasOwnProperty.call(obj, 'quack')
	}).length

}

module.exports = duckCount