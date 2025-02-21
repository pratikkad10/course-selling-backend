const mongoose=require('mongoose');
const ObjectId=mongoose.ObjectId;

const User=new mongoose.Schema({
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String,
    },
    name:{
        required:true,
        type:String,
    }
})


const usermodel=mongoose.model('users' , User);

module.exports ={
    usermodel:usermodel
}