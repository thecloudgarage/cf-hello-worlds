var http = require('http');
var os = require('os');
var port = process.env.PORT || 5000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hi there, this is a NodeJS app running as a OCI compliant container on Tanzu Platform on port ' + port + ' from container ' + os.hostname() + '\n');
}).listen(port, function() {
  console.log("Listening on " + port);
});
