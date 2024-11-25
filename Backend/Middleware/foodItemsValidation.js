import Joi from "joi";

const foodItemValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
      "string.base": "Name must be a string.",
      "string.empty": "Name is required.",
      "string.min": "Name should have at least 3 characters.",
      "string.max": "Name should not exceed 20 characters.",
    }),
    description: Joi.string().min(3).max(40).messages({
      "string.base": "Description must be a string.",
      "string.min": "Description should have at least 3 characters.",
      "string.max": "Description should not exceed 40 characters.",
    }),
    price: Joi.number().required().messages({
      "number.base": "Price must be a valid number.",
      "any.required": "Price is required.",
    }),
    image: Joi.string().messages({
      "string.base": "Image must be a valid string.",
    }),
    category: Joi.string().min(3).max(20).required().messages({
      "string.base": "Category must be a string.",
      "string.empty": "Category is required.",
      "string.min": "Category should have at least 3 characters.",
      "string.max": "Category should not exceed 20 characters.",
    }),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    // Log the specific error message for debugging
    console.error("Validation error:", error.details[0].message);

    // Check if the error is related to the 'price' field
    if (error.details[0].context.key === 'price') {
      return res.status(400).json({
        message: "Bad Request",
        error: "Invalid price value. Price must be a number.",
        status: 400,
      });
    }

    // General error response for other fields
    return res.status(400).json({
      message: "Bad Request",
      error: error.details[0].message,
      status: 400,
    });
  }
  
  next();
};

export { foodItemValidation };
