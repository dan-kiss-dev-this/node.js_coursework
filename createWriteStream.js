//using streams and readable streams, streams let you read and write data from a source. they are unix pipes, writeFile does the who thing, here we are using createWriteStream to pass the data in chunks not one big shot at once
var fs = require('fs');

//createReadstream inherits from event emitter class so you can use event emitter methods
var readStream = fs.createReadStream('file.txt');
readStream.setEncoding('utf8');

//what we will do now is read in chunks and write in chunks not the whole thing to be more efficent to do this we fille use the filesystem createWriteStream method with name of file to be made and written to
var writeStream = fs.createWriteStream('write_file.txt');

//chunk will dontain some data from file.txt above, note chunk dat is in hex format, but you need it in text so need the utf8 above
readStream.on('data', function(chunk) {
    console.log('---------------------------------------');
    writeStream.write(chunk);
});

//the end event can also be triggered at the end
readStream.on('end', function(chunk) {
    console.log('----------------END-----------------------');
});

