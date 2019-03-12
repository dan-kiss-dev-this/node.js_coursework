//using streams and readable streams, streams let you read and write data from a source. they are unix pipes, writeFile does the who thing, here we are using createWriteStream to pass the data in chunks not one big shot at once
var fs = require('fs');
var http = require('http');

//we are writing to the server from file.txt and then pipe aka showing it on the browser using the pipe
http.createServer(function(req, res) {
    //send the http header, http status 200 ok and content type: text plain
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var readStream = fs.createReadStream('file.txt', 'utf8');
    readStream.pipe(res);
    //send the response body to appear on the browser via the pipe
}).listen(3000);

console.log('server running on http://127.0.0.1:3000')

//pipe method below listens for data and sends it
// readStream.pipe(writeStream)