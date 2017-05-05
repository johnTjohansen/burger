var express = require("express");
var methride = require("method-override");
var bodyParser = require("body-parser");
var orm = require("./config/orm.js");

var exp = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static app content from the /public directory
app.use(express.static(__dirname, '/public'));

// override with POST having ?_method=UPDATE
app.use(methodOverride("_method"));

// set up handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});