// Whenevr we have to perform file io ops, we make use of filesystem module

var fs = require('fs')
fs.readFile('./readMe.txt', function(err, data) {
    if(err) {
        console.log(err)
    } else {
        console.log("Async data is " + data.toString())
    }
})

//readFileSync will make the call synchronously nd will block the execution
var data = fs.readFileSync("./readMe.txt");
console.log("Sync data is " + data.toString())
console.log("This is the end")

setTimeout(function() {console.log("Just testing")}, 5000);