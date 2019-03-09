//fs used for filesystem input and output
var fs = require('fs');

//the function is a callback triggered when the file is read
var read_string = fs.readFile('test.txt', 'utf8', function (err, data) {
    if (err) 
        return console.error(err);
    
    console.log(data)
    return data;
});

//the function is a callback triggered when the file is read
var readStringSync = fs.readFileSync('test.txt', 'utf8');

//note this note below will appear first due to asnc non-blocking nature of node
console.log('the file is read');

fs.writeFile('text3.txt', readStringSync, function (err, data) {
    console.log(readStringSync,22)
    if (err) 
        return console.error(err);
    
    console.log('successful')
});

