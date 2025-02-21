const mongoose=require('mongoose');

function connect(){
    try {
        mongoose.connect('mongodb://localhost:27017/courses');
        console.log("DB connsction successfull!");
    } catch (error) {
        console.error("error in DB", error);
    }
}

module.exports=connect;