//events and event emitter
//what happens is certain objects called 'emitters' emit events that cause function objects 'listeners' to be called. for instance a net.Server object emits an event each time a peer connects to it aka fs.ReadStream emits an event when the file is opened, a stream emits an event whever data is available to be read.
var events = require('events');
var util = require('util');

//below we make make a new event emitter
var eventEmitter = new events.EventEmitter();

var Students = function(name) {
    this.name = name;
}

//students will inherit from events.EventEmitter
util.inherits(Students, events.EventEmitter);

var max = new Students('max');

max.on('scored', function(marks) {
    console.log(max.name + ' scores ' + marks);
});

max.emit('scored', 95);

//below is a listener to an event, can do keyword of query
// eventEmitter.on('clicked', function(button) {
//     console.log(button +' is clicked');
// });

//when you emit the keyword below the event emitter above .on occurs, button 1 is argument passed here
// eventEmitter.emit('clicked', 'button 1');

