const express = require("express");
const sqlite = require("sqlite3");
const path = require("path");


// Create the express server
const port = 3000;
const app = express();

// Serve the static elements
app.use(express.static(path.join(__dirname, "public")));





// Run/start the server
app.listen(port, () => {
	console.log(`🔥 Server listening on port ${port}\n- http://localhost:${port}\n`);
});