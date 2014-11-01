function repeat(fn, num) {
	if (num > 0) {
		fn();
		higher(fn, num--);
	} else {
		fn();
	}
}

module.exports = repeat;