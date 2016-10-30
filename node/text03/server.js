const http = require("http");
const url = require("url");

function start(route, handle) {


    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;


        route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(8803);
    console.log("Server is start");
}


exports.start = start;