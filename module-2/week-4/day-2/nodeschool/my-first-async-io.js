const fs = require('fs');
const pathToFile = process.argv[2];

const handleRead = (err, buffer)=>{
    const text = buffer.toString();
    const count = text.split('\n').lenght -1 ;
}

fs.readFile(process.argv[2], handleRead );