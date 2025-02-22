const jwt=require('jsonwebtoken');
require('dotenv').config();
const JWT_USER_PASSWORD=process.env.JWT_USER_PASSWORD;

async function userAuthentication(req,res,next){
    const token=req.headers['token'];
    console.log("Token" , token);
    
    const response=jwt.verify(token, JWT_USER_PASSWORD);

    console.log("Response" , response);
    
    if(!response){
        return res.json({
            message:"Invalid token!"
        })
    }
    req.userId=response.id;
    next();
}

module.exports ={
    userAuthentication 
}