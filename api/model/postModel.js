'user strict';
var sql = require('./db.js');

//Post object constructor
var Post = function(Post){
    this.Post = Post.Post;
    this.status = Post.status;
    this.created_at = new Date();
};
Post.createPost = function createUser(newPost, result) {
    console.log('sex')  ;
    var x=JSON.parse(newPost.Post);
        sql.query("INSERT INTO Post set content=?, title=?", [x.content,x.title], function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Post.getPostById = function(PostId, result) {
        sql.query("Select * from Post where idpost = ? ", PostId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Post.getAllPost = function getAllPost(result) {
        sql.query("Select * from Post", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Posts : ', res);  

                 result(null, res);
                }
            });   
};
Post.updateById = function(id, Post, result){
    console.log(Post.Post);
  sql.query("UPDATE Post SET content = ?, title = ? WHERE idpost = ?", [Post.content, Post.title, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Post.remove = function(id, result){
     sql.query("DELETE FROM Post WHERE idpost = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

Post.getAllPostPage = function (page,size,result) {
    sql.query("SELECT * FROM Post  LIMIT ?,? ",[page,size], function (err, res) {
            console.log(page+" "+size);
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('Posts : ', res);  

             result(null, res);
            }
        });   

        
};

Post.getSize = function (result) {
    sql.query("SELECT COUNT(*) FROM post", function (err, res) {
            //console.log(page+" "+size);
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('size je : ', res);  

             result(null, res[0]);
            }
        });   
};

module.exports= Post;