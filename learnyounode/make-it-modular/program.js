var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function(err, data) {
	if (err) {
		console.log('Some error.\n');
	} else {
		for(var i=0; i < data.length; i++) {
			console.log(data[i]);
		}
	}
});