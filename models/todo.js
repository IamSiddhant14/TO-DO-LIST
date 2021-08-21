const mongoose= require('mongoose');
const todoSchema = new mongoose.Schema({
    //here description,category,data are feilds while its collection is called document,and document colletively is called collection
    description:{
        type: String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
}) 
const todo = mongoose.model('todo',todoSchema);
module.exports = todo;