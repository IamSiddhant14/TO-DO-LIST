const todo = require('../models/todo')
module.exports.deletetask = function(req,res){
    // console.log(req.body.id)
    let id = req.body.id;
    console.log(typeof(id))
    if(typeof(id)==="string"){
        //when only a single check box is been clicked
        todo.findByIdAndDelete(id,function(err){
            console.log("sndj",id)
            if(err){
                console.log("Run into an error while deleting the task from the database")
                return
            }
            return res.redirect('back');
        })
        //for multiple checkboxes checked
    }else{

        for(let i of id){
                todo.findByIdAndDelete(i,function(err){
                    if(err){
                        console.log("Run into an error while deleting the task from the database")
                        return
                    }
                })
        }
        return res.redirect('back');


    }
  
}