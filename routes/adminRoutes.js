const express = require("express");
const router = express.Router();

const {signupHandler,signinHandler} = require("../controller/Authentication/AdminAuthentication");
const { adminAuthentication } = require("../middleware/admin.middleware");
const { coursemodel } = require("../models/Courses");

router.post("/signup", signupHandler);

router.post("/signin", signinHandler);


router.put("/course",adminAuthentication, async (req, res) => {
  try {
    const adminId = req.adminId;

    const { title, description, price, courseId } = req.body;

    const updateCourse = await coursemodel.updateOne(
      { _id: courseId, creatorId: adminId },
      { 
        $set: { title, description, price } 
      }
    );
    console.log("updated course ", updateCourse);
    
    res.json({
      message: "course updated!",
    });
  } catch (error) {
    res.json({
      message: "Issue in updating Course!",
    });
  }
});


router.post("/course",adminAuthentication, async (req, res) => {
  try {
    const adminId = req.adminId;
    
    const { title, description, price } = req.body;

    const newCourse = await coursemodel.create({
      title,
      description,
      price,
      creatorId: adminId,
    });

    res.json({
      message: "course created!",
      CourseId: newCourse._id,
    });
  } catch (error) {
    res.json({
      message: "Issue in creating Course!",
      error:error
    });
  }
});


router.delete("/course",adminAuthentication, async (req, res) => {
  try {
    const adminId = req.adminId;

    const {  courseId } = req.body;

    const deletedCourse = await coursemodel.deleteOne({
      _id: courseId,
      creatorId: adminId
      
    });

    res.json({
      message: "course deleted!",
    });
  } catch (error) {
    res.json({
      message: "Issue in deleting Course!",
      error:error
    });
  }
});


router.get("/getcourses",adminAuthentication, async (req, res) => {
  try {
    const adminId = req.adminId;

    const courses = await coursemodel.find({ 
      creatorId: adminId 
    });

    
    res.json({
      message: "courses fetched!",
      courses: courses,
    });
  } catch (error) {
    res.json({
      message: "Issue in getting Courses!",
      error:error
    });
  }
});

module.exports = router;
