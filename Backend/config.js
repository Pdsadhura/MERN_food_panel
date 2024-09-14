import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB = process.env.DB;

console.log(`DB is connected at ${DB}`);
mongoose.connect("mongodb://127.0.0.1:27017/Login-SignUp")
  .then(() => {
    console.log(`DB is connected at "mongodb://127.0.0.1:27017/Login-SignUp"`);
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
