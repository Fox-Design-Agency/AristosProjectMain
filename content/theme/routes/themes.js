const express = require("express");
const router = express.Router();
const themesController = require("../controllers/themes_controller");

/*
* GET theme index
*/
router.get("/", themesController.index)


module.exports = router;