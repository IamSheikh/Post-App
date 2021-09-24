const router = require("express").Router();

router.get("/new", (req, res) => {
  res.render("new");
});

module.exports = router;
