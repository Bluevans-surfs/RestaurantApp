// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var tabledata = [{
  
}];

// var tabledata = [{
//   pageName: "yoda",
//   name: "Yoda",
//   role: "Jedi Master",
//   age: 900,
//   forcePoints: 2000
// }, {
//   pageName: "darthmaul",
//   name: "Darth Maul",
//   role: "Sith Lord",
//   age: 200,
//   forcePoints: 1200
// }, {
//   pageName: "obiwankenobi",
//   name: "Obi Wan Kenobi",
//   role: "Jedi Master",
//   age: 55,
//   forcePoints: 1350
// }];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});


app.get("/api/:tabledata?", function(req, res) {
  var chosen = req.params.tabledata;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < tabledata.length; i++) {
      if (chosen === tabledata[i].pageName) {
        return res.json(tabledata[i]);
      }
    }

    return res.json(false);
  }
  return res.json(tabledata);
});

// Create New tabledata - takes in JSON input
app.post("/api/table", function(req, res) {
  console.log(req.body);
  return res.json(false);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
