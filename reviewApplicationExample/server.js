var http = require('http')
var url = require('url')

function startServer(route, handle) {
    function onRequest(request, response) {
        var requestData = "";
        var pathname = url.parse(request.url).pathname;

        request.setEncoding('utf8')
        request.addListener("data", function(chunk) {
            requestData += chunk
        })
        request.addListener("end", function() {
            route(pathname, handle, response, requestData);
        })
    }

    http.createServer(onRequest).listen(8888)
    console.log("Localhost started")
}

exports.startServer = startServer;

