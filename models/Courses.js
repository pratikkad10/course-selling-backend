const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const Course=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        
    },
    price:{
        type:String,
        required:true
    },
    creatorId:{
        type:ObjectId,
        required:true
    }
})

const coursemodel=mongoose.model('courses', Course);

module.exports ={
    coursemodel
}