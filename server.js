const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Load routes
const users = require("./routes/api/users");

// Init app
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Pssport config
require("./config/passport")(passport);

// Use routes
app.use("/api/users", users);

// Run server
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server running on port ${port}`));
