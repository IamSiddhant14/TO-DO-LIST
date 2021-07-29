const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TO_DO_list_db');
const db = mongoose.connection;
//error
db.on('error',console.error.bind(console, 'error connecting to db'));

//up and running
db.once('open',function(){
    console.log('successfully conneced to the database');
});