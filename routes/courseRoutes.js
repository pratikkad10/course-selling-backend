const express=require('express');
const { userAuthentication } = require('../middleware/user.middleware');
const {purchasemodel} = require('../models/Purchase');
const { coursemodel } = require('../models/Courses');
const router=express.Router();

router.get('/getCourses', (req,res)=>{
    res.json({
        message:"All Courses!"
    })
})

router.post('/purchase',userAuthentication, async (req,res)=>{
   try {
    const userId=req.userId;
    const {courseId}=req.body;

    const purchasedCourse=await purchasemodel.create({
        courseId , userId
    })

    res.json({
        message:"course purchased successfully!"
    })
    
   } catch (error) {
        res.json({
            message:"Error in purchasing course!",
            error:error
        })
   }
})

router.get('/preview', async (req,res)=>{
    try {
        
        const courses=await coursemodel.find({})
        
        res.json({
            message:"Preview Courses!",
            courses:courses
        })
    } catch (error) {
        res.json({
            error:error
        })
    }
    
})

module.exports = router;