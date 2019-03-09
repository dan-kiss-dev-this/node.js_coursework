//filesystem module allows you to create and delete folders
var fs = require('fs');

//we will make a directory then after making it invoke the callback that will make a file in the directory
// const message = "add something to mynode.txt";
// fs.mkdir('node', function() {
//     fs.writeFile('./node/mynode.txt', message,(err)=>{ 
//         if (err) throw err;
//         console.log('made folder and file');
//     });
// });

fs.unlink('./node/mynode.txt', (err) => {
    if (err) throw err;
    console.log('file was deleted');
    fs.rmdir('node', (err) => {
             if (err) throw err;
            console.log('folder was deleted');
        });
});


//code below will make a directory then remove, note the word Sync means this is blocking
// fs.mkdirSync('nodeMkdir');
// fs.rmdirSync('nodeMkdir')

//to delete a file
// fs.unlink('text3.txt', (err) => {
//     if (err) throw err;
//     console.log('file was deleted');
// });