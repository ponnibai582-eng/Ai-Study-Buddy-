const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI?.trim();

    console.log("DEBUG URI:", JSON.stringify(uri));
    console.log(
      "VALID START:",
      uri?.startsWith("mongodb://"),
      uri?.startsWith("mongodb+srv://")
    );

    const conn = await mongoose.connect(uri);

    console.log(` MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(" MongoDB Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;