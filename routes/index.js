var router = require('express').Router();
var tagRoutes = require('./tag');
var unitTypeRoutes = require('./unitType');


router.use("/api/tags", tagRoutes);
router.use("/api/unitTypes", unitTypeRoutes);


module.exports = router;


