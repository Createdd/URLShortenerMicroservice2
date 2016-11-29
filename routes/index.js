/* jshint esversion:6*/

var express = require('express');
var router = express.Router();
var mongodb=require("mongodb");
var config=require("../config.js");
var mLab="mongodb://"+config.db.host+"/"+config.db.name;//store mlab url
var MongoClient=mongodb.MongoClient;//to host mongoDB connect command
var shortid=require("shortid");//for generating short urls
shortid.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@");//new list of characters replacing - and _
var validUrl=require("valid-url");//to verify the url


router.get('/new/:url(*)', (req, res, next)=>{
  MongoClient.connect(mLab,(err,db)=>{
    if(err){
      console.log("No connection to MongoDB", err);
    } else{
      console.log("Connected to MongoDB");
      var collection=db.collection("links");//create a db collection
      var params=req.params.url;//set the url as parameter
      var local=req.get("host");
      var newLink=(db,callback)=>{
        collection.findOne({"short":params}, {url: 1, _id: 0},(err,doc)=> {
          if(doc!==null){
            res.json({original_url: url, short_url: local+"/"+doc.short});//if the doc is found display json
          } else {
            if(validUrl.isUri(params)){
              var shortCode=shortid.generate();
              var newUrl={url:params,short:shortCode};
              collection.insert([newUrl]);
              res.json({original_url:params, short_url: local+"/"+shortCode});
              console.log(validUrl.isUri(params));
            }else{
              res.json({error: "URL is not valid"});
            }
          }//else if no document is found create one
        });//set the findOne query for the url
      };//newLink function to import a link to the database and returns a short link

      newLink(db,()=>{
        db.close();
      });//accept a callback function and close the DB
    }//else connect to mongo

  });//MongoClient.connect to mongoDB
});//route to new url. the * allows proper formatting/ alternative would be regEx

router.get('/:short', (req, res, next)=>{
  MongoClient.connect(mLab,(err,db)=>{
    if(err){
      console.log("No connection to MongoDB", err);
    } else{
      console.log("Connected to MongoDB");
      var collection=db.collection("links");//create a db collection
      var params=req.params.short;//set the short url as parameter!!!!!!!
      var findLink=(db,callback)=>{
        collection.findOne({"short":params},(err,doc)=> {
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
