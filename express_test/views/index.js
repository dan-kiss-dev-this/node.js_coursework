var express = require('express');

var app = express();
//GET
//POST
//PUT
//DELETE

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    // res.send('this is the home page');
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/about.html')
    // res.send('this is the about page');
});

app.get('/contact', function(req, res) {
    res.send('this is the contact page');
});

var students = {
    1: {
        name: 'Mark',
        subjects : ['node', 'java', 'ruby']
    },
    2: {
        name: 'Tom',
        subjects : ['node', 'c++', 'ruby']
    },
    3: {
        name: 'john',
        subjects : ['node', 'c', 'ruby']
    }
}

//we are passing parameters via the route
//:colon before parameter name to get the parameter
//req.params.id can we used to query a database
app.get('/students/:id', function(req, res) {
    //from students.ejs below, dont add .ejs but will render student.ejs
    res.render('students', { name : students[req.params.id].name, id : req.params.id, subjects: students[req.params.id].subjects});
});

//app is created an will listen on port 3000
app.listen(3000, function(){
    console.log('Server live on port 3000')
});