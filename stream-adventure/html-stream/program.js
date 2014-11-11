var through = require('through');
var trumpet = require('trumpet');

var tr = trumpet();

var loudStream = tr.select('.loud').createStream();

loudStream.pipe(through(function (buf) {
	this.queue(buf.toString().toUpperCase())
})).pipe(loudStream)

process.stdin.pipe(tr).pipe(process.stdout)

// Another version written with .selectAll()

// tr.selectAll('.loud', function(loudElement) {
// 	var loudStream = loudElement.createStream()

// 	loudStream.pipe(through(function(buf) {
// 		this.queue(buf.toString().toUpperCase())
// 	})).pipe(loudStream)

// })

// process.stdin.pipe(tr).pipe(process.stdout)