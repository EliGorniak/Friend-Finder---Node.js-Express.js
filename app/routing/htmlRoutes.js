// Variable to import the "path" modules from node_modules:
const path = require("path");

// This will exports a function with the routes of 'home' and 'survey' html files:
module.exports = function(app) {
  // Route for the survey.html page:
  app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found, the home.html page will be carried:
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
