// ==== IN THIS CODE WE WILL LOAD THE DATA FROM THE API FRIENDS AND RETURN A JSON ====

// Variable to import all the data inside the file friends.js and to display a JSON:
let friendsData = require("../data/friends");

// This will exports a function with the 2 routes of the API friends:
module.exports = function(app) {
  // API GET Request =>
  // This .get method will link the route '/app/friends' to return the JSON:
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Request =>
  // In this app, user respondes a survey and the responses/data are then sent to the server.
  // Then the server saves the data to the friendsData array:
  // This .post method will link the route '/app/friends' to return the JSON:
  app.post("/api/friends", function(req, res) {
    // Variable for every friend in the array:
    let myMatch = {
      name: "",
      photo: "",
      scoreDifference: 50
    };

    // Variable that holds the inputs from every survey/user:
    let newUser = req.body;
    let newUserName = newUser.name;
    let newUserScores = newUser.scores;
    let newUserPhoto = newUser.photo;

    // Variable to hold the difference between 2 scores:
    let totalDifference = 0;

    // Loop through the users inside the array to compare their scores:
    for (let i = 0; i < friendsData.length; i++) {
      console.log(friendsData[i].name);
      totalDifference = 0;

      // Loop through the scores to calculate the difference:
      for (let k = 0; k < 10; k++) {
        //
        totalDifference +=
          Math.abs(parseInt(newUserScores[k])) -
          parseInt(friendsData[i].scores[k]);
        //
        if (totalDifference <= myMatch.scoreDifference) {
          // myMatch will be a new friend/user:
          myMatch.name = friendsData[i].name;
          myMatch.photo = friendsData[i].photo;
          myMatch.scoreDifference = totalDifference;
        }
      }
    }
    //
    friendsData.push(newUser);

    //
    res.json(myMatch);
  });
};
