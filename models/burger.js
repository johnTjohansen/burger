var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	create: function(cols, als, cb) {
		orm.create("burgers", cols, vals, function(res) {
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update("burgers", objColVals, condition, fuction(res) {
			cb(res);
		});
	}
};

module.exports = burger;