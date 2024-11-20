const http = require("http");

http.createServer(function (request, response) {
    console.log(request.url);

    if (request.url === "/") {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end("<h1>Welcome to the new Server!</h1>");
    }
    else if (request.url === "/about") {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end("<h1>This is a simple http Node.js server</h1>");
    }
    else if (request.url === "/contact") {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end("<h1>Contact us at contact@newserver.com</h1>");
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end("<h1 style='color:red'>Page not found!</h1>");
    }

}).listen(5000);
