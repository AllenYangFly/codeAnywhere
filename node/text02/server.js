const http = require('http');
var url = require('url');
var router = require('./router.js');


function start(router, handle){
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
          postData += postDataChunk;
          console.log("Received POST data chunk '"+
          postDataChunk + "'.");
        });

        request.addListener("end", function() {
          router(handle, pathname, response, postData);
        });
    }

    http.createServer(onRequest).listen(8802);    
    console.log("Server is start");
}


exports.start = start;