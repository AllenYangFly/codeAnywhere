const http = require('http');
var url = require('url');
var router = require('./router.js');


function start(router, handle){
    function onRequest(request, response) {
        console.log("Request Recived");
        var pathname = url.parse(request.url).pathname;

        router(handle, pathname ,response);

   
    }

    http.createServer(onRequest).listen(8888);    
    console.log("Server is start");
}


exports.start = start;