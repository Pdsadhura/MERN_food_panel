import jwt from "jsonwebtoken";

const sessionValidation = (req, res, next) => {
  const auth = req.headers['authorization'];
  
  if (!auth) {
    return res.status(403).json({
      message: "Unauthorized: JWT token is required",
      status:403
    });
  }

  try {
    const decoded = jwt.verify(auth, process.env.SECRET);

    console.log("90s9fsfs",decoded)
    
    if (decoded) {
      req.body.userID = decoded._id;
      next();
    }
  } catch (error) {
    return res.status(403).json({
      message: "Unauthorized: JWT token is expired",
      status:403
      
    });
  }
};

export { sessionValidation };
