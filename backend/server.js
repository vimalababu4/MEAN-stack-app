var express = require('express');
var server = express();
var routes = require('./routes/route');

var mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect("mongodb://localhost:27017/cst",{useNewUrlParser:true, useUnifiedTopology:true},function checkDB(error){
    if(error){
        console.log("db error");
    }else{
        console.log("db connected");
    }
});
server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(8000, function check(error){
    if(error){
        console.log("error");
    }else{
        console.log("started");
    }
});