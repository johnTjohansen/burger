var express = require("express");
var methride = require("method-override");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static app content from the /public directory
app.use(express.static(process.cwd() + './public'));

// override with POST having ?_method=UPDATE
app.use(methride("_method"));

// set up handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes
var router = require("./controllers/burgers_controller")(app);
app.use('/', router);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});