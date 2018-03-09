// good practice to have the variable name same as module name
// Goto localhost:8888 to see the output

var http = require("http")

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write("Hello Neerav")
    response.end()
}).listen(8888)