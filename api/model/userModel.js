'user strict';
var sql = require('./db.js');

//User object constructor
var User = function(User){
    this.User = User.User;
    this.status = User.status;
    this.created_at = new Date();
};
User.createUser = function createUser(newUser, result) {    
        sql.query("INSERT INTO User set ?", newUser, function (err, res) {
                
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
User.getUserById = function createUser(UserId, result) {
        sql.query("Select * from User where idUser = ? ", UserId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
User.getAllUser = function getAllUser(result) {
        sql.query("Select * from User", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Users : ', res);  

                 result(null, res);
                }
            });   
};
User.updateById = function(id, User, result){
  sql.query("UPDATE Users SET User = ? WHERE id = ?", [User.User, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
User.remove = function(id, result){
     sql.query("DELETE FROM User WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

User.Login = function Login(Email,Password, result) {
    sql.query("Select * from users where email = ? and  password= ?", [Email, Password], function (err, res) {             
        console.log(res);
            if(err ) {
                console.log("error: ", err);
             
                result(err, null);
                
            }          
            else{
                
                result(null, res[0]);
            }
        });   
};

module.exports= User;