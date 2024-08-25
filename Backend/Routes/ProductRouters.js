const router = require("express").Router();

const {sessionValidation} = require("../Middleware/sessionValidation")


router.get("/", sessionValidation ,(req,res)=>{
    res.status(200).json({
        data:[{name:"mobile",price:"2200"},{name:"tv",price:"22000"}],
        user_info:req.user
    })
})



module.exports = router