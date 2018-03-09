// async examples

console.log("User 1 made the request")
setTimeout(callback, 5000)

console.log("User 2 made the request")
setTimeout(callback, 5000)

console.log("User 3 made the request")
setTimeout(callback, 5000)

function callback() {
    console.log("Querying to database.")
}