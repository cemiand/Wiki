const express = require("express");
const router = express.Router();
const wiki = require("./wiki");
const user = require("./user");

router.use("/user", user);
router.use("/wiki", wiki);

router.get("/", (req, res) => {
  res.send("Test");
});

module.exports = router;
