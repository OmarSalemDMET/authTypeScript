import mongoose from "mongoose";
require("dotenv").config();
const connectionUDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || "");
    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (error: any) {
    console.log("the url is \n", process.env.MONGODB_URI);
    console.error(`Error : ${error.message}`);
    process.exit(1);
  }
};

export default connectionUDB;
