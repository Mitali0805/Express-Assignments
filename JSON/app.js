var express = require('express');
var fs = require('fs');
var app = express();

var name = process.argv[3];

var object
fs.readFile(name,'utf8',function(err,data){
    var test = data.toString();
     object = JSON.parse(test);
});

app.get('/books',function(req,res){
    res.json(object);
});

app.listen(process.argv[2]);