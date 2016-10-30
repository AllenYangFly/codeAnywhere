function start(response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("start");
    response.end();
}

function upload(response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("upload");
    response.end();
}

exports.start = start;
exports.upload = upload;