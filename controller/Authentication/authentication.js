const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userAuthentication } = require("../../middleware/user.middleware");
const { usermodel } = require("../../models/user");

//signup
async function signupHandler(req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const olduser = await usermodel.findOne({ email: email });
    if (olduser) {
      return res.json({
        message: "Already have an account!",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser = await usermodel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });

    if (newuser) {
      res.json({ message: "user successfully created!" });
    }
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error in creating user!",
      error: error,
    });
  }
}

//signin
async function signinHandler(req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await usermodel.findOne({ email: email });
    if (!user) {
      return res.json({
        message: "please signup!",
      });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (user && passwordMatch) {
      const token = jwt.sign(
        {
          id: user._id.toString(),
        },
        process.env.JWT_USER_PASSWORD
      );
      res.json({ message: "Welcome!", token: token });
    }
  } catch (error) {
    res.json({
      message: "Invalid credentials!",
    });
  }
}

module.exports = {
  signupHandler,
  signinHandler,
};
