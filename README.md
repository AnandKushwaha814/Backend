## How to create a package in JavaScript

- npm init

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

* npm start

Is this OK? (yes)
```

- ES Module import export
- common js import export

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
## Fs command
```
// create file
// fs.writeFileSync("example.txt", "Hello, World!");

// make empty file
// fs.writeFileSync("example.txt","");

// replace all data and add new data
// fs.writeFileSync('./text.txt',"Welcome ")   

// insert data not delete all
// fs.appendFileSync('./text.txt',"Wello") 

// read data
// const data = fs.readFileSync('./text.txt',
//    'utf8');
//   console.log(data);

// copy data
// fs.copyFileSync('./text.txt', './text2.txt')

// es modul?

// console.log(fs.statSync("./text.txt"));

// Delete file
// fs.unlinkSync('./example.txt')

// Rename file
// fs.renameSync('./text.txt', './anand.txt')

// make file
// fs.mkdirSync('./hello.txt')

// remove directory
// fs.rmdirSync('hello')

// delete file by path
// fs.rm('./text.txt')
```

## MongoDb
* no sql 

## Schema
```
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected To MongDb");
  })
  .catch((err) => console.log("Error",err));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

```
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create schema
const userSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Phone: {
    type: Number,
    required: true,
    unique: true,
  },
  designation: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});
// Create model
module.exports = mongoose.model("User", userSchema);
```