const express = require("express");
const bodyParser = require("body-parser");
const sqlite = require("sqlite3");
const path = require("path");


// Create the express server
const port = 3000;
const app = express();

// Serve the static elements and allow body parsing
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

// Create the database
const database = new sqlite.Database("database.sqlite");

// Run/start the server
app.listen(port, () => {
	console.log(`🔥 Server listening on port ${port}\n- http://localhost:${port}\n`);
});