// Variables to import the modules from node_modules:
var express = require("express");
var path = require("path");

// Variable to set up Express server app:
var app = express();

// Variable to set up the PORT for the Express server:
var PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing (middleware):
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Starts the server to begin listening (using arrow function):
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
