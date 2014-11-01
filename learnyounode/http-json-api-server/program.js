var http = require('http');
var url = require('url');
var querystring = require('querystring');

var portNumber = process.argv[2];

function parseTime(time) {
	return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
	}
}

function unixTime(time) {
	return {
		unixtime: time.getTime()
	}
}

var server = http.createServer(function(req, res) {
	
	var result;

	res.writeHead(200, { 'Content-Type': 'application/json' })

	var q = url.parse(req.url);
	var params = querystring.parse(q.query);
	var time = new Date(params.iso);

	if (q.pathname == "/api/parsetime") {
		result = parseTime(time);
	} else if (q.pathname == "/api/unixtime") {
		result = unixTime(time);
	}

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end('not found. path = ' + q.pathname + ' query: ' + q.query);
	}
});

server.listen(portNumber);

// /api/parsetime?iso=2013-08-10T12:10:15.474Z
// /api/unixtime?iso=2013-08-10T12:10:15.474Z
// url.parse(request.url, true)