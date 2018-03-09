//This is one way to create modules and export them so can be used y other files. But in this case we have to use again n again module.exports file which we don't want to.

// function relay() {
//     console.log("This is a relay function")
// }

// function longJump() {
//     console.log("This is a long jump function")
// }

// module.exports.relayModule = relay
// module.exports.longJumpModule = longJump

// Another way is 
module.exports = {
    relay: function() {
        console.log("This is a relay function")
    },

    longJump: function() {
        console.log("This is a long jump function")
    }
}