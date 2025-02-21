const express=require('express');
const router=express.Router();
const { signupHandler, signinHandler } = require('../controller/authentication');

router.post('/signup', signupHandler);
router.post('/signin', signinHandler);



module.exports = router;