const http = require("http");
const url = require('url');
const fs = require("fs");

http.createServer(function (request, response) {

    const parsedURL = url.parse(request.url, true);

    // check if pathname containd file path (pathname is everything between the host and start of query)
    // so for http://localhost:5000/file?name=data.txt pathname will be exactly /file 
    if (parsedURL.pathname === "/file") {

        // there is a file name, try reading it
        const fileName = parsedURL.query.name;
        try {
            const fileContent = readFileContentIfExists(fileName);
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(fileContent);
        } catch (error) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end(`<h1 style='color:red'>${error.message}</h1>`);
        }
    }
    // there is no file name in the url, show invalid route
    else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end("<h1 style='color:red'>Invalid route!</h1>");
    }
}).listen(5001);

function readFileContentIfExists(filePath) {
    try {
        return fs.readFileSync(filePath, "utf8");
    } catch (error) {
        throw new Error("File not found!");
    }
}