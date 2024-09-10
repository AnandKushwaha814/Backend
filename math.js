function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

exports.divide=()=>{
  console.log("Hello from Divide.js");
}

module.exports = {
  add,
  sub,
}

