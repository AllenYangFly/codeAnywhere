const server = require("./server.js");
const router = require("./router.js");
const requestHandle = require("./requestHandle.js");

let handle = {};
handle["/"] = requestHandle.start;
handle["/start"] = requestHandle.start;
handle["/upload"] = requestHandle.upload;

server.start(router.route, handle);