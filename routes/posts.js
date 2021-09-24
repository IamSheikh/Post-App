const router = require("express").Router();
const post = require("./../models/post");
const bodyParser = require("body-parser");

router.use(bodyParser.json()).use(
  bodyParser.urlencoded({
    extended: true,
  })
);

router.get("/new", (req, res) => {
  res.render("new", { post: new post() });
});

router.get("/:id", async (req, res) => {
  const posts = await post.findById(req.params.id);
  if (posts == null) res.redirect("/");
  res.render("show", { post: posts });
});

router.post("/post", async (req, res) => {
  try {
    const { username, title, description } = req.body;
    const newPost = new post({
      username: username,
      title: title,
      description: description,
    });
    await newPost.save();
    res.redirect(`/${newPost.id}`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
