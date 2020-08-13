var express = require('express');
var strftime = require('strftime');
var app = express();


app.get('/year',function(req,res){
    console.log(req.query);
   var date = strftime('%Y') - req.query.age;
  res.send('You were born in:'+ date);
});

app.listen(3000);