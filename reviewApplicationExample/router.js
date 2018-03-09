function route(pathname, handle, response, reviewData) {
    console.log("Routing request for " + pathname);
    
    if(typeof handle[pathname] === 'function') {
        handle[pathname](response, reviewData);
    } else {
        console.log("Handler for this request does not exist");
        // console.log("Request received")
        response.writeHead(404, {'Content-Type':'text/plain'})
        response.write("Page does not exist")
        response.end()
    }
}

exports.route = route;