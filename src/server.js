const express = require("express");
const path = require("path");

// Express setup
const app = express();
const port = 3000;

// Add express dependency stuff
app.use(express.static(path.join(__dirname, "public")));









// Start the express server
app.listen(port, () => {

	console.log(`Server listening on port ${port}!\nConnect via "http://localhost:${port}"\n`);
});