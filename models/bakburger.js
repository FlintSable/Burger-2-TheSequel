'use strict';
module.exports = function(sequalize, DataTypes) {
	var burgers = sequalize.define('burgers', {
		burger_name: DataTypes.STRING,
		devoured: DataTypes.BOOLEAN
	}, {
		classMethods: {
			associate: function(models) {
			}
		}
	});
	return burgers;
};