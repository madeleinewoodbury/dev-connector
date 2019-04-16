const express = require("express");
const mongoose = require("mongoose");

// Load routes
const users = require("./routes/api/users");

// Init app
const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Use routes
app.use("/api/users", users);

// Run server
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server running on port ${port}`));
