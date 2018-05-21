var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/client/dist' ));

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./client/dist/index.html"))
});

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});




