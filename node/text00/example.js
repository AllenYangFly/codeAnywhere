var http = require("http");

http.createServer(function(rep,res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end("hello word\n");
}).listen(1337,'127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
