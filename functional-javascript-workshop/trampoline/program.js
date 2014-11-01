// http://stephen-young.me.uk/2013/01/20/functional-programming-with-javascript.html
// http://taylodl.wordpress.com/2013/06/07/functional-javascript-tail-call-optimization-and-trampolines/

function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return
  operation()
  return trampoline(repeat.bind(null, operation, --num))
}

function trampoline(fn) {
	while(fn && fn instanceof Function) {
		fn = fn.apply(fn.context, fn.args)
	}
	return fn
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  trampoline(repeat.bind(null, operation, num))
}