const express = require('express');
const app = express();
const mongoose = require('mongoose');

//body parser - need to be used external middleware with older version
app.use(express.json());
//using the routes mentioned in the given path
app.use('/api', require('./routes/api'))

//connecting to mongoose
mongoose.connect('mongodb://localhost/student')
mongoose.Promise = global.Promise;

//listining on the port
app.listen(8787, function(){
    console.log('server started at port 8787')
})