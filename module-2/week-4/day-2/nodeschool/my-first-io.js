const fs = require('fs'); "core node API => stands for File System"

const pathToFile = process.argv[2];
const buffer = fs.readFileSync(pathToFile)
const text = buffer.toString();
const count = text.split('\n').length -1;
console.log(count);