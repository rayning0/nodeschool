// For an explanation of the trampoline concept see:
// http://www.integralist.co.uk/posts/understanding-recursion-in-functional-javascript-programming/
// http://stephen-young.me.uk/2013/01/20/functional-programming-with-javascript.html

function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return repeat.bind(null, operation, --num)
}

function trampoline(fn) {
	while(fn && fn instanceof Function) {
    fn = fn()
	}
	return fn
}

module.exports = function(operation, num) {
  return trampoline(repeat.bind(null, operation, num))
}