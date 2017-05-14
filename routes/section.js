var router = require('express').Router();
var sectionCtrl = require('../controllers/sectionCtrl');
router.get("/",sectionCtrl.GetAll);
router.get("/:id",sectionCtrl.GetById);
router.post("/", sectionCtrl.Add);
router.delete("/:id",sectionCtrl.Delete);
router.put("/:id",sectionCtrl.Update);// write updated properties in jason object in body

module.exports = router;

