
const jwt = require("jsonwebtoken")
const sessionValidation = (req, res, next) => {

    const auth = req.headers['authorization']
    if(!auth){
        res.status(403).json(
            {
                message:"Unauthorize JWt token is require"
            }
        )
    }

   try{
     const decoded = jwt.verify(auth,process.env.SECRET)
     if(decoded){
        // console.log("middlewere user" , req.user)
      req.user = decoded
      next();
     }

   }catch(error){
    res.status(403).json(
        {
            message:"Unauthorize JWt token is expired"
        }
    )
   }
  
};

module.exports = {sessionValidation};
