const express = require("express");
const router = express.Router();
const expansionsController = require("../controllers/expansions_controller");

/*
* GET exoansion index
*/
router.get("/", expansionsController.index)


module.exports = router;