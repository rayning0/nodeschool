var net = require('net');
var strftime = require('strftime');

var portNumber = process.argv[2];

server = net.createServer(function(socket) {
	// "YYYY-MM-DD hh:mm"
	var currentTime = strftime('%Y-%m-%d %H:%M');
	socket.end(currentTime + '\n');
});

server.listen(portNumber);