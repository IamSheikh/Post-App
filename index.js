require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const post = require("./models/post");
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

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const posts = await post.find();
  res.render("index", { posts: posts });
});

app.use("/", require("./routes/posts"));

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
