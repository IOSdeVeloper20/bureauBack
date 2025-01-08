const express = require("express");
const router = express.Router();
const textController = require("../Controllers/UpdateController");

router.put("/:file/:id/:language", textController.UpdateText);

module.exports = router;