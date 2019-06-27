var express = require('express');
var jwt= require('jsonwebtoken');
//var cors= require('cors');
var router = express.Router();
var User_controller = require('../controllers/UserController');

//var app = express();
//app.use(cors());



router.post('/login', User_controller.login);




module.exports = router;

