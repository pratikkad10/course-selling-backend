const jwt=require('jsonwebtoken');
require('dotenv').config();
const JWT_USER_PASSWORD=process.env.JWT_USER_PASSWORD;

async function userAuthentication(req,res,next){
    const token=req.header.token;
    const response=jwt.verify(token, JWT_USER_PASSWORD);

    if(!response){
        return res.json({
            message:"Invalid token!"
        })
    }
    res.userId=response.id;
    next();
}

module.exports ={
    userAuthentication 
}