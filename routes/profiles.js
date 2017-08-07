var express = require("express");
var router = express.Router();
var models = require("./../models");
var { User, Profile, BasicInfo, Location } = models;
var sequelize = models.sequelize;

router.get("/profiles/show/:id", (req, res) => {
  Profile.findById(req.params.id, {
    include: [
      { model: User },
      {
        model: BasicInfo,
        include: Location
      }
    ]
  }).then(profile => {
    res.render("profiles/show", { profile });
  });
});

module.exports = router;
