const todo = require('../models/todo')
module.exports.home=function(req,res){

    todo.find({},function(err,info){
        if(err){
            console.log("error found while fetching contact from the database");
            return;
        }return res.render('home.ejs',{

            title:"TO-DO LIST",
            data:info

        })
    })
    

}