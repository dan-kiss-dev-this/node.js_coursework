//to use node we will require some modules, a module is like a library, does what classes do in object oriented programming, node modules allow us to import inbuilt code, we are creating an instance with the word require aka 
//this is a basic server with node js
var http = require('http');
var hello = require('./my_module.js');

http.createServer(function (req, res) {
    var body = 'this is the body of the response';
    var content_length = body.length;
    res.writeHead(
        200, 
        {
            'Content-Type': 'text/plain',
            'Content-Length': content_length
        }
    );
    res.end(body);
}).listen(3000);
//3000 is port you listen on

console.log('Server is running on http://127.0.0.1:3000')
console.log(__dirname);
console.log(__filename);

var time = 0;

var timer = setInterval(function(){
    time+=1;
    console.log(time, ` hey, ${time} seconds passed`)
    if (time>3) {
        clearInterval(timer);
    }
}, 1000);

console.log(hello.sayHelloInEnglish());
console.log(hello.sayHelloInSpanish());





