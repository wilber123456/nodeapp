const express = require('express');
var app = express();


app.get('/',(req,res)=>{
    res.sendStatus(200);
});
app.listen(80);

