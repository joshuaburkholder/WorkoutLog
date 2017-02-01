var router = require('express').Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');



router.post('/', function(req, res){
		User.findOne({where: { username: req.body.user.username} } ).then(
			function(user){
				if(user){
					bcrypt.compare(req.body.user.password, user.passwordhash, function(err,matches){
						if(matches){
							var token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24});

								res.json({
									user: user,
									message: "successfully authenticated",
									sessionToken: token
								});
						}else{
							res.status(500).send({error: "THat failed, dude." });
						}
					});
				}else{
					res.status(500).send({error: "Nope!"});
				}
			},
			function(err){
				res.json(err);
				res.status({error: "no way"});
			}
		);
});

module.exports = router;
