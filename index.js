const express = require("express");
const userRoutes = require("./routes/userRoutes");
const UserAuth = require("./routes/AuthRoutes");

const connectDb = require("./database/db");
const cors = require("cors");
const app = express();
app.use(express.json());

// Middleware

app.use("/api/users", userRoutes);
app.use("/api/users/create", userRoutes);
app.use("/api/users/update", userRoutes);
app.use("/api/userAuth", UserAuth);

// backend connect
app.use(cors());

app.get("/api/users", (req, res) => {
  res.send(User);
});

// Connection
connectDb();

// server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
