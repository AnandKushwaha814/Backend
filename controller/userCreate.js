const userSchema = require('../models/User')
exports.createUser = () => {
  console.log("Hello from createUser.js");
};
exports.allUser = async (req, res) => {
  res.send("userSchema.FirstName")
};
exports.updateUser = () => {
  console.log("Hello from createUser.js");
};
