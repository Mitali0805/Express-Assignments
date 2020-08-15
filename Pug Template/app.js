var express = require('express');
var app = express();
var port = process.argv[2];
var path = require('path');
 
app.set('view engine','pug');

app.set('views',path.join(__dirname,'templates'));

app.get('/home',function(req,res){
    res.render('index',{date: new Date().toDateString()});
});

app.listen(port,()=>{
    console.log("listening to port"+port);
})