const express = require("express");
const router = express.Router();
const getController = require("../Controllers/GetController");

router.get("/:file", getController.getData);

module.exports = router;
