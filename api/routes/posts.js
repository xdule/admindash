var express = require('express');
var jwt= require('jsonwebtoken');
//var cors= require('cors');
var router = express.Router();
var Post_controller = require('../controllers/PostController');

//var app = express();
//app.use(cors());



router.post('/post/newpost',verifyToken, Post_controller.create_a_Post);

router.get('/post',verifyToken, Post_controller.list_all_Posts);

router.get('/post/tito', Post_controller.list_all_Posts);

router.get('/post/:PostId',verifyToken, Post_controller.read_a_Post );

router.post('/allpost', Post_controller.list_all_Posts_page);

router.post('/delete', Post_controller.delete_a_Post);

router.post('/singlepost', Post_controller.getPostById);

router.get('/getSize', Post_controller.count_Post);

router.post('/newPost', Post_controller.create_a_Post);

router.post('/updatePost', Post_controller.update_a_Post);

router.post('/createPost', Post_controller.create_a_Post);

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;

    jwt.verify(req.token, 'secret', function(err, data) {
      if (err) {   
       
        res.sendStatus(403);
      } else {       
        next();
      }})

   
  } else {
    res.sendStatus(403);
  }
}



module.exports = router;

