

var express = require('express');
var router = express.Router();

var herb = require('../models/herb.js');

router.get("/", function(req, res) {
  res.redirect("/herb");
});


router.get('/', function(req, res) {
  herb.selectAll(function(data) {
    var hbsObject = {
      herb: data
    };
  
    res.render('index', hbsObject);
  });
});

router.post('/herb', function(req, res) {
  herb.insertOne([
    'herb_name'
  ], [
    req.body.herb_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/herb/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  herb.updateOne({
    picked: true
  }, condition, function(data) {
    res.redirect('/');
    // res.sendStatus(200);
  });
});

module.exports = router;