var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

//server Static Assets
app.use('/static',express.static('public'));


app.listen(PORT,()=>{
    console.log('Server connected at:',PORT)
});