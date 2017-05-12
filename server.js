var mongoose = require("mongoose");
var userModel=require("./collections/user");
var badgeModel=require("./collections/badge");
var courseModel=require("./collections/course");
var ingradientModel=require("./collections/ingradient");
var multimediaModel=require("./collections/multimedia");
var multimediaTypeModel=require("./collections/multimediaType");
var recipeModel=require("./collections/recipe");
var reviewModel=require("./collections/review");
var reviewTypeModel=require("./collections/reviewType");
var sectionModel=require("./collections/section");
var tagModel=require("./collections/tag");
var unitTypeModel=require("./collections/unitType");

mongoose.connect("mongodb://localhost:27017/Aesh_Mal7");

var user= new userModel({
    name:"ghada"
})
user.save();

var badge= new badgeModel({
    name:"badge"
})
badge.save();


var ingradient= new ingradientModel({
    name:"ingradient"
})
ingradient.save();


var multimedia= new multimediaModel({
    name:"multimedia"
})
multimedia.save();

var multimediaType= new multimediaTypeModel({
    name:"multimediaType"
})
multimediaType.save();

var recipe= new recipeModel({
    name:"recipe"
})
recipe.save();

var review= new reviewModel({
    name:"review"
})
review.save();

var reviewType= new reviewTypeModel({
    name:"reviewType"
})
reviewType.save();

var section= new sectionModel({
    name:"section"
})
section.save();

var tag= new tagModel({
    name:"tag"
})
tag.save();

var unitType= new unitTypeModel({
    name:"section"
})
unitType.save();