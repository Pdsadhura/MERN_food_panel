import multer from "multer";
import path from "path";

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Uploads/');  // Ensure 'Uploads' directory exists or change path accordingly
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Define the upload middleware with error handling
const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Only images (jpeg, jpg, png) are allowed!"));
    }
  }
});

// Middleware function to handle file uploads and errors
const errorMiddleware = (req, res, next) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      // Check if the error is from multer's fileFilter
      if (err.message === "Only images (jpeg, jpg, png) are allowed!") {
        return res.status(401).json({
          message: err.message,
          status: 401
        });
      }
      // Handle other errors
      return res.status(500).json({
        message: "An error occurred during file upload",
        error: err.message
      });
    }
    // If no errors, proceed to the next middleware or route handler
    next();
  });
};

export  {errorMiddleware}
