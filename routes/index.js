/* jshint esversion:6*/

var express = require('express');
var router = express.Router();
var mongodb=require("mongodb");
var mLab="mongodb://test:test@ds159387.mlab.com:59387/urlshortener";//store mlab url
var MongoClient=mongodb.MongoClient;//to host mongoDB connect command
var shortid=require("shortid");//for generating short urls
var validUrl=require("valid-url");//to verify the url


router.get('/new/:url(*)', (req, res, next)=>{
  MongoClient.connect(mLab,(err,db)=>{
    if(err){
      console.log("No connection to MongoDB", err);
    } else{
      console.log("Connected to MongoDB");
      var collection=db.collection("links");//create a db collection
      var params=req.params.url;//set the url as parameter
      var newLink=(db,callback)=>{
        /*var insertLink={url:params, short:"test"};//create a new object
        collection.insert([insertLink]);//store the object in the database
        res.send(params);//output the url*/
        if(validUrl.isUri(params)){
          var shortCode=shortid.generate();
          var newUrl={url:params,short:shortCode};
          collection.insert([newUrl]);
          res.json({original_url:params, short_url: "localhost:3000/"+shortCode});
          console.log(validUrl.isUri(params));
        }else{
          res.json({error: "URL is not valid"});
        }
      };//function to import a link to the database and returns a short link
      newLink(db,()=>{
        db.close();
      });//accept a callback function and close the DB
    }
  });//connect to mongoDB
});//route to new url. the * allows proper formatting/ alternative would be regEx

router.get('/:short', (req, res, next)=>{
  MongoClient.connect(mLab,(err,db)=>{
    if(err){
      console.log("No connection to MongoDB", err);
    } else{
      console.log("Connected to MongoDB");
      var collection=db.collection("links");//create a db collection
      var params=req.params.url;//set the url as parameter
      var findLink=(db,callback)=>{
        collection.findOne({"short":params}, {url: 1, _id: 0},(err,doc)=> {
          if(doc!==null){
            res.redirect(doc.url);//when a documents is found, redirect to the doc page
          }else{
            res.json({error:"No Shortlink in Database found"});//else display error
          }
        });//set the findOne query for the url
      };//function to import a link to the database and returns a short link
      findLink(db,()=>{
        db.close();
      });//accept a callback function and close the DB
    }
  });//connect to mongoDB
});//route to new url. the * allows proper formatting/ alternative would be regEx


module.exports = router;
