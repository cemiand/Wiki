const express = require("express");

const router = express.Router();

router.get("/", function (req, res, next) {
  res.redirect("/");
});

router.post("/add", function (req, res) {
  res.json(req.body);
});

router.get("/add", function (req, res) {
  res.render("addpage");
});

module.exports = router;
