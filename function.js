function print_stuff(stuff) {
    console.log(stuff)
}

print_stuff("Normal Function")

// pass function as parameters
function main(anotherFun, value) {
    anotherFun(value)
}

main(print_stuff, "passing function as parameter")

// Assign functions to variables or anonymous function
var fun = function(stuff) {
    console.log(stuff)
}

main(fun, "Assigning function as variable")

//passing anonymous function as parameter or creating/efining anonymous function as parameters
main(function(stuff) {
        console.log(stuff)
    }, "Anonymous function")