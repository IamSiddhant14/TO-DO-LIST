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

// this will render the todo list on the browser
app.get('/',function(req,res){

    todo.find({},function(err,info){
        if(err){
            console.log("error found while fetching contact from the database");
            return;
        }return res.render('home.ejs',{

            title:"TO-DO LIST",
            data:info

        })
    })
    

})

//This controller will handle the responce recived by the todo list
app.post('/create',function(req,res){

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

})

// this will delete the that contact who's is been send by clicking the checkbox
app.post('/delete',function(req,res){
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
                return res.redirect('back');
        })
    }
  }
})


//the server is running on the specified port
app.listen(port,function(err){
    if(err){
        console.log("You run into an error")
    }
    console.log("SERVER IS UP AND RUNNING ON PORT :",port)
})