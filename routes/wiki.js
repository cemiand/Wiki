const express = require("express");
const router = express.Router();
const models = require("../models");
const page = models.Page;
const user = models.User;

router.get("/", function (req, res, next) {
  res.send("Bienvenido a Wiki");
});

// router.post("/add", function (req, res) {
//   res.json(req.body);
// });

router.post("/add", function (req, res, next) {
  const title = req.body.name;
  const content = req.body.textArea;

  page
    .create({
      title: title,
      content: content,
    })
    .then(() => {
      res.json();
    })
    .catch((e) => {
      console.log(e);
    });
});

router.get("/add", function (req, res) {
  res.render("addpage");
});

module.exports = router;
