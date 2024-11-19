// backend/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverApi: {
        version: "1",
        strict: true,
        deprecationErrors: true,
      },
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Error handling
    mongoose.connection.on("error", (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
