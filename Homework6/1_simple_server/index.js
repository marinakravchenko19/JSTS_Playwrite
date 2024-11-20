/**Сервер має відповідати на різні маршрути наступним чином:
/ - відповідь вітальним повідомленням "Welcome to the new Server!"
/about - у відповідь надайте інформацію про сервер "This is a simple http Node.js server".
/contact - у відповідь укажіть контактну інформацію, наприклад "Contact us at contact@newserver.com".
Будь-який інший маршрут повинен відповісти кодом статусу 404 і повідомленням на зразок "Page not found" */

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
