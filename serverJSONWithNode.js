//using streams and readable streams, streams let you read and write data from a source. they are unix pipes, writeFile does the who thing, here we are using createWriteStream to pass the data in chunks not one big shot at once
var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
    //send the http header, http status 200 ok and content type: text/html to server html from server side
    res.writeHead(200, {'Content-Type': 'application/json'});
    var jsonObject = {
        name: 'max',
        surname: 'smith',
        age: 26
    };
    //.end needs string for argument
    res.end(JSON.stringify(jsonObject));
    
}).listen(3000);

console.log('server running on http://127.0.0.1:3000')

//pipe method below listens for data and sends it
// readStream.pipe(writeStream)