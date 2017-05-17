var router = require('express').Router();
var multimediaTypeCtrl = require('../controllers/multimediaTypeCtrl');
router.get("/",multimediaTypeCtrl.GetAll);
router.get("/:id",multimediaTypeCtrl.GetById);
router.post("/", multimediaTypeCtrl.AddMultimediaType);
router.delete("/:id",multimediaTypeCtrl.Delete);
router.put("/:id",multimediaTypeCtrl.Update);// write updated properties in jason object in body

module.exports = router;




















