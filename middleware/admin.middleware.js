const jwt=require('jsonwebtoken');
require('dotenv').config();
const JWT_ADMIN_PASSWORD=process.env.JWT_ADMIN_PASSWORD;

async function adminAuthentication(req,res,next){
    const token=req.header.token;
    const response=jwt.verify(token, JWT_ADMIN_PASSWORD);

    if(!response){
        return res.json({
            message:"Invalid token!"
        })
    }
    res.adminId=response.id;
    next();
}

module.exports ={
    adminAuthentication 
}