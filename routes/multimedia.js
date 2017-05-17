var router = require('express').Router();
var multimediasCtrl = require('../controllers/multimediasCtrl');
router.get("/",multimediasCtrl.GetAll);
router.get("/:id",multimediasCtrl.GetById);
router.post("/", multimediasCtrl.AddMultimedia);
router.delete("/:id",multimediasCtrl.Delete);
router.put("/:id",multimediasCtrl.Update);// write updated properties in jason object in body

module.exports = router;