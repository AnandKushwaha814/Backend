const User = require("../models/User");
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(200).send(user);
  } catch (error) {
    // console.error(error);
    return res.status(500).send(error.message);
  }
};

exports.allUser = async (req, res) => {
  try {
    const users = await User.find();
    // res.send(users);
    res.status(200).json(users);
  } catch (error) {
    // console.error(error);
    return res.status(500).send(error.message);
  }
};
exports.deleteUser = async (req, res) => {};
exports.getUserById = async (req, res) => {
  try {
    const id = await User.findById(req.params.id);
    return res.status(200).send(id);
  } catch (error) {
    // console.error(error);
    return res.status(500).send(error.message);
  }
};

exports.updateUser = async (req, res) => {
  res.send("Here we write the code of update user");
};


