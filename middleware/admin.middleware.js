const jwt=require('jsonwebtoken');
require('dotenv').config();


async function adminAuthentication(req,res,next){
    const token=req.headers['token'];
    const response=jwt.verify(token, process.env.JWT_ADMIN_PASSWORD);
    if(!response){
        return res.json({
            message:"Invalid token!"
        })
    }
    req.adminId=response.id;
    next();
}

module.exports ={
    adminAuthentication 
}