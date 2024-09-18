const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/users/create", userRoutes);
app.use("/api/users/update", userRoutes);

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected To MongDb");
  })
  .catch((err) => console.log("Error", err));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
