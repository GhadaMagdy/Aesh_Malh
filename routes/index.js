var router = require('express').Router();
var tagRoutes = require('./tag');
var unitTypeRoutes = require('./unitType');
var recipeRoutes=  require('./recipe');
var reviewRoutes = require('./review') ;
var reviewTypeRoutes = require('./reviewType') ;
var sectionRoutes = require('./section') ;
var userRoutes = require('./user') ;
var multimediaRoutes = require('./multimedia');
var multimediaTypeRoutes = require('./multimediaType') ;



router.use("/api/tags", tagRoutes);
router.use("/api/unitTypes", unitTypeRoutes);
router.use("/api/recipe", recipeRoutes) ;
router.use("/api/review", reviewRoutes) ;
router.use("/api/reviewTypes", reviewTypeRoutes) ;
router.use("/api/section", sectionRoutes) ;
router.use("/api/multimediaTypes", multimediaTypeRoutes) ;
router.use("/api/multimedia", multimediaRoutes) ;
router.use("/api/user", userRoutes) ;

module.exports = router;