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

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const posts = [
    {
      username: "Sheikh Taha Jameel",
      title: "Sample Post",
      description: "Sample Post",
    },
    {
      username: "Taha Jameel",
      title: "Sample Post 2",
      description: "Sample Post 2",
    },
  ];
  res.render("index", { posts: posts });
});

app.use("/", require("./routes/posts"));

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
