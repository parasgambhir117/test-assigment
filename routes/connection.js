var mysql      = require('mysql');

connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test-assignment'
});


connection.connect(function(err) {

    if(err){
       console.log("mysql connection error")
    }
    else{
      console.log("Connected!");
    }
   

  });