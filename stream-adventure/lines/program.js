var split = require('split');
var through = require('through');

var i = 1;
var tr = through(function (buf) {
  var line = buf.toString();
	if (i % 2 == 0) {
		this.queue(line.toUpperCase() + '\n');
	} else {
		this.queue(line.toLowerCase() + '\n');
	}
	i++;
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);