const express=require('express');
const { signupHandler, signinHandler } = require('../controller/AdminAuthentication');
const router=express.Router();

router.post('/signup', signupHandler);

router.post('/signin', signinHandler);

//update course
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

router.get('/getcourses', (req,res)=>{
    res.json({
        message:"All courses for Admin!"
    })
})

module.exports=router;