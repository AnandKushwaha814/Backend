const fs = require("fs");
// fs.writeFileSync('./text.txt',"Welcome ")   replace all data and add new data
// fs.readFileSyncFileSync('./text.txt')
// fs.appendFileSync('./text.txt',"Wello") insert data not delete all

// const data = fs.readFileSync('./text.txt',
//    'utf8',  'r' );
//   console.log(data);

// copy data
fs.copyFileSync('./text.txt', './text2.txt')