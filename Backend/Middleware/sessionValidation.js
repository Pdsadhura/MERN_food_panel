import jwt from "jsonwebtoken";

const sessionValidation = (req, res, next) => {
  const auth = req.headers['authorization'];
  
  if (!auth) {
    return res.status(403).json({
      message: "Unauthorized: JWT token is required"
    });
  }

  try {
    const decoded = jwt.verify(auth, process.env.SECRET);
    
    if (decoded) {
      req.user = decoded;
      next();
    }
  } catch (error) {
    return res.status(403).json({
      message: "Unauthorized: JWT token is expired"
    });
  }
};

export { sessionValidation };
