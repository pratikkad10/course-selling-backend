const express=require('express');
const { signupHandler, signinHandler } = require('../controller/authentication');
const router=express.Router();

router.post('/signup', signupHandler);

router.post('/signin', signinHandler);

router.put('/course', (req,res)=>{
    res.json({
        message:"Update course!"
    })
})

router.post('/course', (req,res)=>{
    res.json({
        message:"Add course!"
    })
})

router.delete('/course', (req,res)=>{
    res.json({
        message:"Delete course!"
    })
})

router.get('/courses', (req,res)=>{
    res.json({
        message:"All courses for Admin!"
    })
})

module.exports=router;