var express = require("express");

var router = express.Router();
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.Burger.findAll().then(function(dbBurger){
    var hbsObject = { burgers: dbBurger };
    res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {

  db.Burger.create({

    burger_name: req.body.burger_name

  }).then(function(dbBurger){
    console.log(dbBurger);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
