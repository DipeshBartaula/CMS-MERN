const mongoose = require("mongoose");

//connecting to database
exports.connectDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://hello:hello@cluster0.typlv8a.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Database connected successfully");
};
