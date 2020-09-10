const http = require("http");

http.createServer((request, response) => {
    response.write("Hello World from Node.js");
    response.end();
}).listen(8080);