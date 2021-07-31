const todo = require('../models/todo')
module.exports.addtask=function(req,res){

    console.log(req.body)
    todo.create({
        description:req.body.discrption,
        category:req.body.cars,
        date:req.body.date
    },function(err,newTask){
        let date = new Date(req.body.date);
        date: date.toDateString()
        if(err){
            console.log('error from create_contact',err)
            return
        }
        console.log("*****************",newTask)
        return res.redirect('back');
    })

}