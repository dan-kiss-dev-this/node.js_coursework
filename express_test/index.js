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

var students = {
    1 : 'Mark',
    2: 'Tom',
    3: 'john'
}

//we are passing parameters via the route
//:colon before parameter name to get the parameter
//req.params.id can we used to query a database
app.get('/students/:id', function(req, res) {
    res.send('you have requested student name ' + students[req.params.id]);
});

//app is created an will listen on port 3000
app.listen(3000, function(){
    console.log('Server live on port 3000')
});