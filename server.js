var express = require("express");
var methride = require("method-override");
var bodyParser = require("body-parser");
var orm = require("./config/orm.js");

var exp = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
