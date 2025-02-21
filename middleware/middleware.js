const jwt=require('jsonwebtoken');
const JWT_SECRET="pkk123";

async function auth(req,res,next){
    const token=req.header.token;
    const response=jwt.verify(token, JWT_SECRET);

    if(!response){
        return res.json({
            message:"Invalid token!"
        })
    }

    res.userId=response.id;
    next();
}

module.exports ={
    auth , JWT_SECRET
}