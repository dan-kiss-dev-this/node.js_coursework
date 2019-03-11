//using streams and readable streams, streams let you read and write data from a source. they are unix pipes
var fs = require('fs');

//createReadstream inherits from event emitter class so you can use event emitter methods
var readStream = fs.createReadStream('file.txt', 'utf8');
var data = '';

//chunk will dontain some data from file.txt above, note chunk dat is in hex format, but you need it in text so need the utf8 above
readStream.on('data', function(chunk) {
    console.log('---------------------------------------');
    data += chunk;
    // console.log(chunk);
});

//the end event can also be triggered at the end
readStream.on('end', function(chunk) {
    console.log(data);
    console.log('----------------END-----------------------');
});