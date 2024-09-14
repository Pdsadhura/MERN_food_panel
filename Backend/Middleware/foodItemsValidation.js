import Joi from "joi"

const foodItemValidation = (req , res , next) =>{

 const schema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  description:Joi.string().min(3).max(40),
  price : Joi.number().required() ,
  image:Joi.string(),
  category:Joi.string().min(3).max(20).required(),
 }
)

const { error } = schema.validate(req.body);
console.log("Validation result:", error);

if (error) {
    console.error("Validation error:", error.details[0].message);
    return res.status(400).json({ message: "Bad Request", error: error.details[0].message , status:400 });
}
next();
}

export {foodItemValidation}

