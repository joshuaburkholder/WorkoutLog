var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('workout', 'postgres', 'H438#sk!fDf033R', {
	host: 'localhost',
	dialect: 'postgres'
});

sequelize.authenticate().then(
	function(){
		console.log('connected to workoutlog postgres db');
	},
	function(err){
		console.log(err);
	}
);


var User = sequelize.define('user',{
	username: Sequelize.STRING,
	passwordhash: Sequelize.STRING,
});




User.sync();  
//User.synod({force: true});

app.use(bodyParser.json());

app.post('/api/user', function(req,res){
	var username = req.body.user.username;
	var pass = req.body.user.password;
	User.create({
		username: username,
		passwordhash: ""
}).then(
		function createSUccess(user){
			res.json({
				user: user,
				message: 'create'
			});
		},
		function createError(err){
			res.send(500, err.message);	
		}
	);
});


app.use(require('./middleware/headers.js'));

app.use('/api/test', function(req, res){
	res.send("hello World");
});


app.listen(3000,function(){						
	console.log("app is listening on 3000");	
});


