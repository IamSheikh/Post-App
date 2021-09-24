require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
