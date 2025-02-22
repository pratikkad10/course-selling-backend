const express = require("express");
const {
  signupHandler,
  signinHandler,
} = require("../controller/AdminAuthentication");
const { adminAuthentication } = require("../middleware/admin.middleware");
const { coursemodel } = require("../models/Courses");
const router = express.Router();
const app = express();

router.post("/signup", signupHandler);

router.post("/signin", signinHandler);

app.use(adminAuthentication);

router.put("/course", (req, res) => {
  res.json({
    message: "Update course!",
  });
});

router.post("/course", async (req, res) => {
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
        message:"Issue in creating Course!"
    })
  }
});

router.delete("/course", (req, res) => {
  res.json({
    message: "Delete course!",
  });
});

router.get("/getcourses", (req, res) => {
  res.json({
    message: "All courses for Admin!",
  });
});

module.exports = router;
