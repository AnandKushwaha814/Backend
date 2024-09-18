const express = require("express");
const router = express.Router();
const {
  createUser,
  allUser,
  updateUser,
  userApi, deleteUser,getUserById
} = require("../controller/userCreate");
const { showData } = require("../controller/userApi");
const { dataShow } = require("../controller/userDefineData");

router.post("/create", createUser);
router.get("/all", allUser);
router.get("/update", updateUser);
router.get("/getUserById/:id",getUserById)
router.get("/showdata", showData);
router.get("/data-show", dataShow);

module.exports = router;
