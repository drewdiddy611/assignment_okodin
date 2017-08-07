// router/users.js
var express = require("express");
var router = express.Router();
var models = require("./../models");
var User = models.User;
var sequelize = models.sequelize;

router.get("/users", (req, res) => {
  User.findAll()
    .then(users => {
      res.render("users/search", { users });
    })
    .catch(e => res.status(500).send(e.stack));
});

module.exports = router;
