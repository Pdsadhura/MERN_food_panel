const userModal = require("../Models/users");
require('dotenv').config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    try {
        // Your login logic here
        const {email,password} = req.body
        const user = await userModal.findOne({email})

        if(!user){
            return res.status(403).json({ message: "Email or password is wrong", status: 403 });
        }
        const isPassword = await bcrypt.compare(password,user.password)

        if(!isPassword){
            return res.status(403).json({ message: "Password is incorrect", status: 403 });
        }
             // Debugging SECRET value
             console.log('SECRET:', process.env.SECRET);
             // Check if SECRET is loaded
             if (!process.env.SECRET) {
                 return res.status(500).json({ message: "Internal server error: SECRET is not defined", status: 500 });
             }
        const jwtToken = jwt.sign({email:user.email, _id :user._id},process.env.SECRET ,{expiresIn:"24h"})
        res.status(200).json({
            message:"Login Successfully" ,  token:jwtToken , email:user.email ,status:200
        })
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Something went wrong", status: 500 });
    }
};

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModal.findOne({ email });
        console.log("Existing user check:", user);
        if (user) {
            return res.status(401).json({ message: "User already exists, you can login", status: 401 });
        }
        const newUser = new userModal({ name, email, password });
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();
        res.status(200).json({ message: "User created successfully!", status: 200 });
    } catch (error) {
        console.error("Signup error:", error); // Log the error to see what might be causing the crash
        res.status(500).json({ message: "Something went wrong", status: 500 });
    }
};

const logout = (req, res) => {
    try {
        // You might want to log the user out by clearing the token on the client side.
        // This is just an informative response as JWTs cannot be invalidated server-side.
        res.status(200).json({ message: "Logout successful", status: 200 });
    } catch (error) {
        console.error("Logout error:", error);
        res.status(500).json({ message: "Something went wrong", status: 500 });
    }
};

module.exports = { login, signup ,logout};
