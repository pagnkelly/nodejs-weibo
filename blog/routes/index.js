//var express = require('express');
//var router = express.Router();
//
///* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

module.exports = function(app){
  app.get('/',function(req,res){
      res.render('index',{title:'Express'})
  });
    app.get('/reg',function(req,res){
        res.render('reg',{title:'用户注册'})
    });
};
