import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,  // fixed "require" to "required"
  },
  email: {
    type: String,
    required: true,  // fixed "require" to "required"
    unique: true,
  },
  password: {
    type: String,
    required: true,  // fixed "require" to "required"
  }
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
