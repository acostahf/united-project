var express = require("express");
var router = express.Router();
var cohortsCtrl = require("../controllers/api/cohorts");

/* GET /api/cohorts */
router.get("/", cohortsCtrl.index);
router.get("/:id", cohortsCtrl.show);
router.post("/", cohortsCtrl.create);
router.delete("/:id", cohortsCtrl.delete);
router.put("/:id", cohortsCtrl.update);

module.exports = router;
