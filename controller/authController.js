const UserAuth = require("../models/AuthUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUesr = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists in the database
    const userExists = await UserAuth.findOne({ username: username });
    if (userExists) {
      res.status(200).send("User already exists");
    }
    // password must be 8th char
    if (password.length < 8) {
      return res
        .status(400)
        .send("Password must be at least 8 characters long");
    }
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password and save it to the database
    const newUser = new UserAuth({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).send("User registered successfully!");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Check if the user already exists in the database
  const emailExists = await UserAuth.findOne({ email: email });
  if (!emailExists) {
    res.status(200).send("invalid username or password");
  }
  // password must be 8th char
  const checkPassword = await bcrypt.compare(password, emailExists.password);
  if (!checkPassword) return res.status(400).send("Invalid Password");
  // use jwt token
  const token = jwt.sign(
    {userId: emailExists._id },
    "abc",
    // process.env.SECRET_KEY,
    ({
      expiresIn: "1h",
    })
  );
  res.json({ token });

  console.log(token);
};
