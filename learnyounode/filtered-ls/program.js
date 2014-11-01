var fs = require('fs');
var filepath = process.argv[2];
var extension = process.argv[3];

fs.readdir(filepath, function(err, files) {
	for(var i=0; i < files.length; i++) {
		if (files[i].slice((extension.length + 1) * -1) == "." + extension) {
			console.log(files[i]);
		}
	}
});