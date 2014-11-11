var duplexer = require('duplexer');
var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
    // spawn the process and return a single stream
    // joining together the stdin and stdout here

    var childProcess = spawn(cmd, args)

    // var duplexStream = duplexer(writeable, readable)
    var duplexStream = duplexer(childProcess.stdin, childProcess.stdout)
    return duplexStream
};