require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db');

var User = sequelize.import('./models/user');
User.sync();  
//User.sync({force: true});

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));

app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/session'));
app.use('/api/test', function(req, res){
	res.send("hello World");
});

app.listen(3000,function(){						
	console.log("app is listening on 3000");	
});










