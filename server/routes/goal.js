var router = require("express").Router();
var sequelize = require("../db");
var User = sequelize.import("../models/user");
var Goal = sequelize.import("../models/goal");


router.post("/", function(req, res) {
	var title = req.body.goal.title;
	var description = req.body.goal.desc;
	var user = req.user;

	Goal
	.create({
		title: title,
		description: description,
		owner: user.id,

	}).then(

		function createSuccess(goal) {
			res.json(goal);
		},
		function createError(err) {
			res.status(500).send(err.message);
		}
	);
});

router.get("/", function(req, res) {
	var userid = req.user.id;
	Goal
	.findAll({
		where: { owner: userid }
	})
	.then(
		function findAllSuccess(data) {
			res.json(data);
		},
		function findAllError(err) {
			res.status(500).send(err.message);
		}
	);
});

// this will retrieve one workout specified by the goal id
router.get("/:id", function(req, res) {
	var data = req.params.id;
	console.log(data);		// for testing purposes
	Goal
	.findOne({
		where: { id: data }
	})
	.then(
		function getSuccess(updateData) {
			res.json(updateData);
		},
		function getError(err) {
			res.status(500).send(err.message);
		});
});

router.put("/", function(req, res) {
	var title = req.body.goal.title;
	var description = req.body.goal.desc;
	var data = req.body.goal.id;
	console.log(req);
	Goal
	.update(
	{
		title: title,
		description: description

	},
	{where: { id: data }}
	).then(
	function updateSuccess(updatedGoal) {
		res.json(updatedGoal);
	},
	function updateError(err) {
		res.status(500).send(err.message);
	});
});

router.delete("/", function(req, res) {
	var data = req.body.goal.id;
	Goal
	.destroy({
		where: { id: data }
	})
	.then(
		function deleteGoalSucess(data) {
			res.send("You removed a goal");
		},
		function deleteGoalError(err) {
			res.status(500).send(err.message);
		}
	);
});

module.exports = router;