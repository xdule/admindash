'use strict';
var empty = require('is-empty');
var User = require('../model/UserModel.js');

exports.list_all_Users = function(req, res) {
  User.getAllUser(function(err, User) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', User);
    res.send(User);
  });
};



exports.create_a_User = function(req, res) {
  var new_User = new User(req.body);

  //handles null error 
   if(!new_User.User || !new_User.status){

            res.status(400).send({ error:true, message: 'Please provide User/status' });

        }
else{
  
  User.createUser(new_User, function(err, User) {
    
    if (err)
      res.send(err);
    res.json(User);
  });
}
};


exports.read_a_User = function(req, res) {
  User.getUserById(req.params.UserId, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};



exports.update_a_User = function(req, res) {
  User.updateById(req.params.UserId, new User(req.body), function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};


exports.delete_a_User = function(req, res) {


  User.remove( req.params.UserId, function(err, User) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};


exports.login = function(req,res){
    User.Login(req.body.Email, req.body.password, function(err,User){
        if(err)
        {
         // result.send(401);
         res.json({ message: 'error has been detected' });
        }
    //    console.log(json(User));
       /* if(typeof User == undefined ){result.send(401);}
        if(res==''){result.send(401);}
        if(res.length==0){result.send(401);}*/
        if(typeof User !== 'undefined' && User !== null)
        {
          res.json(User);
        }
        else
        res.send(401);

    });
};