// index.js | Dylan | 301294233 | 09/29/2023
var express = require('express');
var router = express.Router();

// I import the portfolio.json to have dynamic data so can be changed whenever I want.
const portfolio = require('../data/portfolio.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { portfolio, title: "Home" });
});

module.exports = router;
