var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/app/public'));

var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});