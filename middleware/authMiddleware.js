const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Token is required");

  // verify
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRECT);
    console.log(decode);
    req.User = decode.UserId;
    next();
  } catch (err) {
    return res.status(400).send("invalid token Access  Denied");
  }
};
module.exports = authMiddleware;
