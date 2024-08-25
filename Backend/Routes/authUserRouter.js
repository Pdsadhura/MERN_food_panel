const router = require("express").Router();
const {login,signup} = require("../Controller/authUserController")
const {loginValidation,signupValidation} = require("../Middleware/authUserValidation")


router.post("/login",loginValidation,login)
router.post("/signup",signupValidation,signup)


module.exports = router