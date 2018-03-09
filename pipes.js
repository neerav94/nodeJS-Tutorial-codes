// Piping is a mechanism in which you can read data from a source and write it to a destination without managing anything in between

var fs = require('fs')

var readableStream = fs.createReadStream("./readMe.txt");
var writabeStream = fs.createWriteStream("./testOutput.txt")

readableStream.pipe(writabeStream)