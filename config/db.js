const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
      console.log("MongoDB Connected");
    });
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
  }
};

module.exports = connectDB;
