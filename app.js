const express = require("express");
const { connectDatabase } = require("./database/database");
const app = express();

//Connecting to database
connectDatabase();

app.get("/", (req, res) => {
  res.json({
    name: "I am dipesh",
  });
});

app.listen(3000, () => {
  console.log("Nodejs started at port 3000");
});
