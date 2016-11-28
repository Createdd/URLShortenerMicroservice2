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
      var collection=db.collection("links");//create a db collection
      var params=req.params.url;//set the url as parameter
      var newLink=(db,callback)=>{
        var insertLink={url:params, short:"test"};//create a new object
        collection.insert([insertLink]);//store the object in the database
        res.send(params);//output the url
      };//function to import a link to the database and returns a short link
      newLink(db,()=>{
        db.close();
      });//accept a callback function and close the DB
    }
  });//connect to mongoDB
  //res.render('index', { title: 'Express' });
});//the * allows proper formatting/ alternative would be regEx

module.exports = router;
