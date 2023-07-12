import mongoose from "mongoose";

export const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Connected SuccessFully");
  } catch (error) {
    console.log(error);
  }
};
