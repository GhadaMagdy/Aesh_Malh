var router = require('express').Router();
var reviewTypeCtrl = require('../controllers/reviewTypeCtrl');
router.get("/",reviewTypeCtrl.GetAll);
router.get("/:id",reviewTypeCtrl.GetById);
router.post("/", reviewTypeCtrl.AddReviewType);
router.delete("/:id",reviewTypeCtrl.Delete);
router.put("/:id",reviewTypeCtrl.Update);// write updated properties in jason object in body

module.exports = router;




















