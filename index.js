const express=require('express');
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const {usermodel}=require('./db')
const port=3000;
app.use(express.json());
const {auth, JWT_SECRET}=require('./middleware');

const connect =require('./config/connection');
connect();

app.get('/', (req,res)=>{
    res.send('home page!');
})

app.post('/signup', async(req,res)=>{
    try {
        const email=req.body.email;
        const password=req.body.password;
        const name=req.body.name;
        const olduser=await usermodel.findOne({email:email});
        if(olduser){
            return res.json({
                message:"Already have an account!"
            })
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newuser=await usermodel.create({
            email:email, password:hashedPassword, name:name
        })
        res.json({message:"user successfully created!"});
    } catch (error) {
        console.log(error);
        res.json({
            message:"Error in creating user!",
            error:error
        })
    }
})

app.post('/signin', async(req,res)=>{
    try {
        const email=req.body.email;
        const password=req.body.password;
        const user=await usermodel.findOne({email:email});
        if(!user){
            return res.json({
                message:"please signup!"
            })
        }
        const passwordMatch=await bcrypt.compare(password,user.password);
        if(user&&passwordMatch){
            const token=jwt.sign({
                id:user._id.toString(),
            }, JWT_SECRET)
            res.json({message:"Welcome!", token:token});
        }
    } catch (error) {
        res.json({
            message:"Invalid credentials!"
        })
    }
})


app.listen(port);
