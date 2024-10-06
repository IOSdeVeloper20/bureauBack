const express = require("express");
const router = express.Router();
const loginController = require("../Controllers/LoginController");

router.post("/", loginController.userLogin);

module.exports = router;
