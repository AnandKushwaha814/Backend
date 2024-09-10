## How to create package
* npm init

```
package name: (backend)
version: (1.0.0)
git repository:
keywords:
license: (ISC)
About to write to D:\Backend\package.json:

{
  "name": "backend",
  "version": "1.0.0",
  "description": "this is a dummy project for backend",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Anand",
  "license": "ISC"
}


Is this OK? (yes)

```


* ES Module import export
* common js import export

## Single Function
```
module.exports = add;
const add=require('./maths')
console.log(add(5,10))
```
## Multiple Function 
```
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

exports.divide=()=>{
  console.log("Hello from Divide.js");
}

* Exporting 
module.exports = {
  add,
  sub,
}

*importing

import {add,sub}=require('./math)
console.log(add());

```