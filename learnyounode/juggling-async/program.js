var http = require('http');
var async = require('async');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var cbCount = 0;
var results = [];


function getURL(url, index) {
	http.get(url, function(response) {

		response.on('data', function(data) {
			if(typeof results[index] !== 'undefined') {
				results[index] += data.toString();
			} else {
				results[index] = data.toString();
			}
		});
		
		response.on('end', function() {
			cbCount++;
			if(cbCount == 3) {
				for(var i=0; i < results.length; i++) {
					console.log(results[i]);
				}
			}
		});
	});
}

getURL(url1, 0);
getURL(url2, 1);
getURL(url3, 2);



// async.series([
// 	getURL(url1),
// 	getURL(url2),
// 	getURL(url3)
// ]);