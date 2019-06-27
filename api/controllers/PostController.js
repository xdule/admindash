'use strict';

var Post = require('../model/postModel.js');

exports.list_all_Posts = function(req, res) {
  Post.getAllPost(function(err, Post) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Post);
    res.send(Post);
  });
};



exports.create_a_Post = function(req, res) {
  var new_Post = new Post(req.body);
console.log(new_Post);
  //handles null error 
   if(!new_Post.Post || !new_Post.status){

            res.status(400).send({ error:true, message: 'Please provide Post/status' });

        }
else{
  
  Post.createPost(new_Post, function(err, Post) {
    
    if (err)
      res.send(err);
    res.json(Post);
  });
}
};


exports.read_a_Post = function(req, res) {
  Post.getPostById(req.params.PostId, function(err, Post) {
    if (err)
      res.send(err);
    res.json(Post);
  });
};


exports.list_all_Posts_page = function(req, res) {
  Post.getAllPostPage(req.body.page*req.body.size,req.body.size, function(err, Post) {
    if (err)
      res.send(err);
    res.json(Post);
  });
};

exports.update_a_Post = function(req, res) {
  console.log(req.body.idpost+ ' ' + req.body);
  Post.updateById(req.body.idpost, req.body, function(err, Post) {
    if (err)
      res.send(err);
    res.json(Post);
  });
};


exports.delete_a_Post = function(req, res) {


  Post.remove( req.body.id, function(err, Post) {
    if (err)
      res.send(err);
    res.json({ message: 'Post successfully deleted' });
  });
};


exports.getPostById = function(req, res) {


  Post.getPostById( req.body.id, function(err, Post) {
    if (err)
      res.send(err);
    res.json(Post);
  });
};



exports.count_Post = function(req, res) {


  Post.getSize( function(err, Post) {
    if (err)
      res.send(err);

     console.log(Post["COUNT(*)"]) ;
    res.json(Post["COUNT(*)"]);
  });
};