var connection = requires("./connection.js");

// Object Relational Mapper

var orm = {
	selectAll: function() {
		var queryString = "SELECT * FROM burgers";
		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			console.log(result);
		});
	},
	insertOne: function() {
		var queryString = "INSERT INTO ?? SET ?";
		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			console.log(result);
		});
	},
	updateOne: function() {
		var queryString = "UPDATE burgers SET ? WHERE ?";
		console.log(queryString);
		connection.query(queryString, [colName, ], function(err, result) {
			console.log(result);
		});
	},
}