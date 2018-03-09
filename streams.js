// streams are nothing but Unix pipes that allows to read data from a source and then pipe that data to a destination very easily.

// We have 3 types of streams but we will be reading about 2 streams: readable stream and writable stream

var fs = require('fs')

var readableStream = fs.createReadStream("./readMe.txt")
var data = ''
readableStream.setEncoding('UTF8')
readableStream.on("data", function(chunk) {
    data += chunk
})
readableStream.on('end', function() {
    console.log("Data read is \n" + data.toString())
})

var data = "Hello World!"
var writableStream = fs.createWriteStream("testOutput.txt")
writableStream.write(data, 'UTF8')
writableStream.end()
writableStream.on('finish', function() {
    console.log("Write Completed")
})