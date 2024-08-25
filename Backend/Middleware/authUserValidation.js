const joi = require("joi");

const signupValidation = (req, res, next) => {
    console.log("Signup validation middleware triggered.");

    const schema = joi.object({
        name: joi.string().min(3).max(20).required(),
        email: joi.string().email().required(),
        password: joi.string().min(3).max(20).required(),
    });

    const { error } = schema.validate(req.body);

    console.log("Validation result:", error);

    if (error) {
        console.error("Validation error:", error.details[0].message);
        return res.status(400).json({ message: "Bad Request", error: error.details[0].message });
    }

    next();
};

const loginValidation = (req, res, next) => {
    console.log("Login validation middleware triggered.");
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(3).max(20).required(),
    });

    const { error } = schema.validate(req.body);

    console.log("Validation result:", error);

    if (error) {
        console.error("Validation error:", error.details[0].message);
        return res.status(400).json({ message: "Bad Request", error: error.details[0].message });
    }

    next();
};

module.exports = { signupValidation, loginValidation };
