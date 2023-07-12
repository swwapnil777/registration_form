import mongoose from "mongoose";
import { Schema } from "mongoose";
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  join: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
