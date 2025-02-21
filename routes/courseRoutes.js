const express=require('express');
const router=express.Router();

router.get('/getCourses', (req,res)=>{
    res.json({
        message:"All Courses!"
    })
})

router.post('/purchase', (req,res)=>{
    res.json({
        message:"To Purchase a Course!"
    })
})

router.get('/purchased', (req,res)=>{
    res.json({
        message:"Purchased Courses!"
    })
})

module.exports = router;