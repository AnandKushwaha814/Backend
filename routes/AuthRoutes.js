const express = require("express");
const router = express.Router();
const { registerUesr, loginUser } = require("../controller/authController");
router.post("/register", registerUesr);

router.post("/login", loginUser);

module.exports = router;
