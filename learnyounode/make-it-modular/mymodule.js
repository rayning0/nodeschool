var fs = require('fs');

module.exports = function (dirName, extension, cb) {
	fs.readdir(dirName, function(err, files) {
		if (err) {
			return cb(err);
		} else {
			var results = [];
			for(var i=0; i < files.length; i++) {
				if (files[i].slice((extension.length + 1) * -1) == "." + extension) {
					results.push(files[i]);
				}
			}
			cb(null, results);
		}
	});
}