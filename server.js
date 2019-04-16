const express = require("express");

// Load routes
const users = require("./routes/api/users");

// Init app
const app = express();

// Use routes
app.use("/api/users", users);

// Run server
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server running on port ${port}`));
