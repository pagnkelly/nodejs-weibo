//var express = require('express');
//var router = express.Router();
//
///* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
var crypto=require('crypto');
var User=require('../models/user');
module.exports = function(app){
  app.get('/',function(req,res){
      res.render('index',{title:'Express'})
  });
    app.get('/reg',function(req,res){
        res.render('reg',{title:'用户注册'})
    });
    app.post('/reg',function(req,res){//检验用户输入的两次口令是否一致
        if(req.body['password-repeat']!=req.body['password']){
            req.flash('error','两次输入的口令不一致');
            return res.redirect('/reg');
        }
        //生成口令的MD5值
        var md5=crypto.createHash('md5');
        var password=md5.update(req.body.password).digest('base64');
        var newUser=new User(req.body.username,password);
        User.get(newUser.name,function(err,user){
            if(user){
                err='Username already exists.';
            }
            if(err){
                req.flash('error',err);
                return res.redirect('/reg');
            }
            newUser.save(function(err){
                if(err){
                    req.flash('error',err);
                    return res.redirect('/reg');
                }
                req.session.user=newUser;
                req.flash('success','注册成功');
                res.redirect('/');
            })
        })
        res.render('reg',{title:'用户注册'})
    })
};
