const express = require("express");
const path = require("path");
require("dotenv-flow").config();

// defaults to port 3001 if no value is given for the environment variable
const PORT = process.env.PORT || 3001;

const app = express();

// initialize middleware
const buildPath = path.join(__dirname, "client/build");
app.use(express.static(buildPath));

// ROUTES
app.get("*", (req, res) => {
    res.sendFile(buildPath + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});