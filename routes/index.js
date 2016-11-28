var express = require('express');
var router = express.Router();
var mongodb=require("mongodb");
var shortid=require("shortid");//for generating short urls
var validUrl=require("valid-url");//to verify the url

/* GET home page. */
router.get('/new/:url(*)', function(req, res, next) {
  res.send(req.params.url);
  //res.render('index', { title: 'Express' });
});//the * allows proper formatting/ alternative would be regEx

module.exports = router;
