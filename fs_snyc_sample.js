//fs used for filesystem input and output
var fs = require('fs');

//this file reads file sychronously
var read_string = fs.readFileSync('test.txt', 'utf8');

console.log(read_string);

//to write to the file

fs.writeFileSync('text2.txt', read_string);