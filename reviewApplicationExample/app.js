var server = require('./server.js')
var router = require('./router.js')
var handler = require('./handler.js')

var handle = {}
handle['/'] = handler.home
handle['/home'] = handler.home
handle['/review'] = handler.review

server.startServer(router.route, handle);