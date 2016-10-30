function route(handle, pathname, response) {
    if( typeof handle[pathname] === 'function') {
        handle[pathname](response);     
    } else {
        console.log("No request handle found fot" + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}


exports.route = route;