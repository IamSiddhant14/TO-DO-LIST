const express= require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const todo = require('./models/todo');
const dateFormat = require('moment')


//MIDDLEWARE
//this will help in conventing the dta send by the form into relavent type
app.use(express.urlencoded())
//tell the destination where we should refer for ststic files
app.use(express.static('assets'))

//TO SETTING UP OUR VEIW ENGINE TO EJS
app.set('view engine','ejs');
app.set('views','./viewsS');

// This middleware will lead to the routing files which are futher connected to the schedulars
app.use('/',require('./routes'))

//the server is running on the specified port
app.listen(port,function(err){
    if(err){
        console.log("You run into an error")
    }
    console.log("SERVER IS UP AND RUNNING ON PORT :",port)
})