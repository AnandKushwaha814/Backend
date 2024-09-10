// const math = require('./math')

// console.log(math.add(10,15))
// console.log(math.sub(10,5))
// console.log(math.greet())

const { add, sub } = require("./math");
const { wel, hello } = require("./welcome");
const greet = require("./greet");
console.log(add(10, 15));
console.log(sub(10, 5));

console.log(wel());
console.log(hello());
console.log(greet());
