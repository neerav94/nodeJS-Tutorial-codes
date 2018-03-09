var querystring = require('querystring') 

function home(response, reviewData) {
    console.log("Home handler")
    var html = '<html'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/review" method="POST">'+
    '<textarea name="text" rows="20" cols="5"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(html)
    response.end();
}

function review(response, reviewData) {
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Review is: " + querystring.parse(reviewData).text)
    response.end();
}

exports.home = home;
exports.review = review;