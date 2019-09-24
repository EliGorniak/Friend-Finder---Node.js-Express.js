// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// ==== IN THIS CODE WE WILL LOAD THE DATA FROM THE API FRIENDS AND RETURN A JSON ====

// Variable to import all the data inside the file friends.js and to display a JSON:
var friendsData = require("../data/friends");

// This will exports a function with the route of the API friends:
module.exports = function(app) {
  // API GET Request =====
  // This .get method will link the route '/app/friends' to return the JSON:
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Request =====
  // The code below handles when a user submits a form (submit button) and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // In this app, user respondes a survey and the responses/data are then sent to the server.
  // Then the server saves the data to the friendsData array.
  // ---------------------------------------------------------------------------

  // This .post method will link the route '/app/friends' to return the JSON:
  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
