module.exports = function(sequelize, DataTypes) {
	return sequelize.define('goals', {
		title: DataTypes.STRING,
		description: DataTypes.STRING,
		owner: DataTypes.INTEGER
	},{
	});
};