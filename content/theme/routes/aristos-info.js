const express = require("express");
const router = express.Router();
const aristosInfoController = require("../controllers/aristos_controller");

/*
* GET aristos information
*/
router.get("/", aristosInfoController.index)


module.exports = router;