const express= require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const todo = require('./models/todo');
const dateFormat = require('moment')
app.use(express.urlencoded())
app.use(express.static('assets'))
app.set('view engine','ejs');
app.set('views','./viewsS');


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

app.get('/delete',function(req,res){
    
    let id = req.query.id;
    todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Run into an error while deleting the task from the database")
            return
        }
        return res.redirect('back');
    })

})



app.listen(port,function(err){
    if(err){
        console.log("You run into an error")
    }
    console.log("SERVER IS UP AND RUNNING ON PORT :",port)
})