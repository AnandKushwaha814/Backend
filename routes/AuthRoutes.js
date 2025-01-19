const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { registerUesr, loginUser } = require("../controller/authController");
router.post("/register", registerUesr);

router.post("/login", authMiddleware,loginUser);

module.exports = router;
