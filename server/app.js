require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db');

var User = sequelize.import('./models/user');
//sequelize.sync();  

User.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers.js'));
app.use(require('./middleware/validate-session'));


app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/session'));
app.use('/api/definition', require('./routes/definition'));
app.use('/api/log', require('./routes/log'));


app.use('/api/test', function(req, res){
	res.send("hello World");
});

app.listen(3000,function(){						
	console.log("app is listening on 3000");	
});
