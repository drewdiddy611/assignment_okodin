var express = require("express");
var router = express.Router();

var onLogin = (req, res) => {
  res.render("login");
};
router.get("/login", onLogin);

module.exports = router;
