const express = require("express");
const router = express.Router();
const { createUser, allUser, updateUser } = require("../controller/userCreate");

router.post("/create", createUser);
router.get("/", allUser);

module.exports = router;
