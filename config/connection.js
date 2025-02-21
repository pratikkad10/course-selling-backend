const mongoose=require('mongoose');
require('dotenv').config()
function connect(){
    try {
        mongoose.connect(process.env.DATABASE_URL);
        console.log("DB connection successfull!");
    } catch (error) {
        console.error("error in DB", error);
    }
}

module.exports=connect;