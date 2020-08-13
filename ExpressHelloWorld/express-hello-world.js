var express = require('express');
var app = express();

var PORT = process.env.PORT;
// $env:PORT=1337              //to set temporary env port  

app.get('/',function(req,res){
    res.send('Hello World');
});
app.get('/time',function(req,res){
    res.send(new Date());
});

app.listen(PORT || 8000);
console.log('Web Server is listening at port '+ (PORT || 8000));