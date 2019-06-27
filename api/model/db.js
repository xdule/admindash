var mysql=require('mysql');

var connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3307',
    password:'password',
    database:'reactdb'
    
    
    });

    connection.connect(err=>{
        if(err){return err;}
      });

module.exports=connection; 