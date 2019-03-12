var express = require('express');

var app = express();
//GET
//POST
//PUT
//DELETE

app.get('/', function(req, res) {
    res.send('this is the home page');
});

app.get('/about', function(req, res) {
    res.send('this is the about page');
});

app.get('/contact', function(req, res) {
    res.send('this is the contact page');
});

//app is created an will listen on port 3000
app.listen(3000, function(){
    console.log('Server live on port 3000')
});