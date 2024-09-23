const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const UserAuth = require("./routes/AuthRoutes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/users/create", userRoutes);
app.use("/api/users/update", userRoutes);
app.use("/api/userAuth", UserAuth);

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected To MongDb");
  })
  .catch((err) => console.log("Error", err));

  app.get('/api/users', (req, res) => {
  
    res.send(User);
  })
  app.use(cors());

  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

// middleware
app.use