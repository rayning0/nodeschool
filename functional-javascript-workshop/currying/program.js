// Solution from http://tech.pro/tutorial/2011/functional-javascript-part-4-function-currying
// For an overview of currying see:
// https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe
// http://javascriptweblog.wordpress.com/2010/04/05/curry-cooking-up-tastier-functions/
// http://benalman.com/news/2012/09/partial-application-in-javascript/#manually-specifying-function-arity	
// 
// http://en.wikipedia.org/wiki/Arity

function toArray(e) {
  return Array.prototype.slice.call(e);
}


function sub_curry(fn) {
    var args = [].slice.call(arguments, 1);
    return function () {
        return fn.apply(this, args.concat(toArray(arguments)));
    };
}


function curryN(fn, length) {
	// capture fn's # of parameters
	length = length || fn.length;
	return function () {
	    if (arguments.length < length) {
	        // not all arguments have been specified. Curry once more.
	        var combined = [fn].concat(toArray(arguments));
	        return length - arguments.length > 0 
	            ? curryN(sub_curry.apply(this, combined), length - arguments.length)
	            : sub_curry.call(this, combined );
	    } else {
	        // all arguments have been specified, actually call function
	        return fn.apply(this, arguments);
	    }
	}
}

module.exports = curryN