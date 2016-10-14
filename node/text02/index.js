var server = require('./server');
var router = require('./router');
var requestHandle = require('./requestHandle.js');


var handle = {};
handle['/'] = requestHandle.start;
handle['/start'] = requestHandle.start;
handle['/uponload'] = requestHandle.onload;

server.start(router.router, handle);
