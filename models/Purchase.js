const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const Purchase=new Schema({
    courseId:{
        type:ObjectId,
        required:true
    },
    userId:{
        type:ObjectId,
        required:true
    }
})

const purchasemodel=mongoose.model('purchases', Purchase);

module.exports ={
    purchasemodel
}