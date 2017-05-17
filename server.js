var mongoose = require('mongoose');
var tagModel = require('./collections/tag');
var recipeModel = require ('./collections/recipe');
var reviewModel = require ('./collections/review');
var reviewTypeModel = require ('./collections/reviewType');
var userModel = require ('./collections/user');
var badgeModel = require ('./collections/badge');
var courseModel = require ('./collections/course');
var ingradientModel = require ('./collections/ingradient');
var sectionModel = require ('./collections/section');
var multimediaTypeModel = require ('./collections/multimediaType');
var multimediaModel = require ('./collections/multimedia');
var projectRoutes = require('./routes');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(projectRoutes);
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/Aesh_Mal7");
app.listen(3000, console.log("server is starting on port 3000"));


