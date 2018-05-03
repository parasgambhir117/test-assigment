
var express = require('express')
var app = express()
var mySqlConnection = require('./routes/connection');
var users = require('./routes/users')
var bodyParser = require('body-parser');


app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  



app.post('/login',users.login)



app.listen(8081, function () {
  console.log('App listening on port 8081!')
});


module.exports = app;