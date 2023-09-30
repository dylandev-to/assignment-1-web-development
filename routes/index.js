// index.js | Dylan | 301294233 | 09/29/2023
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Home" });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: "About Me" });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: "Projects" });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: "Services" });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: "Contact" });
});

module.exports = router;
