// express creates the logic for a web server for heroku to understand it is a web server
var express = require("express");

// process.env.PORT is for the secure connection in HTTPS for heroku || or 3000 which is local and used for testing
var PORT = process.env.PORT || 3000;

// app is a selector to create all post get update aand delete requests
var app = express();


//app.use includes logic into web server
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse=translate users data input from machine code(client side) into JSON
// Parse request body as JSON, 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
