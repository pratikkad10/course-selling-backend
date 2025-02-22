const express = require("express");
const router = express.Router();
const {signupHandler,signinHandler} = require("../controller/Authentication/authentication");
const { userAuthentication } = require("../middleware/user.middleware");
const { purchasemodel } = require("../models/Purchase");

router.post("/signup", signupHandler);
router.post("/signin", signinHandler);


router.get('/purchased',userAuthentication, async(req,res)=>{
  try {
    const userId=req.userId;

    const purchases=await purchasemodel.findById({
      userId
    })

    res.json({
      message:"Purchased Courses!",
      purchases:purchases
  })
  } catch (error) {
    res.json({
      message:"Can't find Purchased Courses!"
  })
  }
  
})

module.exports = router;
