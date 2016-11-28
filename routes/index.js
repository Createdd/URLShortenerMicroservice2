/* jshint esversion:6*/

var express = require('express');
var router = express.Router();
var mongodb=require("mongodb");
var mLab="mongodb://test:test@ds159387.mlab.com:59387/urlshortener";//store mlab url
var MongoClient=mongodb.MongoClient;//to host mongoDB connect command
var shortid=require("shortid");//for generating short urls
var validUrl=require("valid-url");//to verify the url

/* GET home page. */
router.get('/new/:url(*)', function(req, res, next) {
  MongoClient.connect(mLab,(err,db)=>{
    if(err){
      console.log("No connection to MongoDB", err);
    } else{
      console.log("Connected to MongoDB");
    }
  });//connect to mongoDB
  //res.render('index', { title: 'Express' });
});//the * allows proper formatting/ alternative would be regEx

module.exports = router;
