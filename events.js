var events = require('events')
var eventEmitter = new events.EventEmitter()

var ringBell = function() {
    console.log("Ring ring ring!!")
    eventEmitter.emit("bellRang", "Welcome by Shopkeeper")
}

eventEmitter.on("doorOpen", ringBell)
eventEmitter.on("bellRang", function(message) {
    console.log(message)
})

eventEmitter.emit("doorOpen")