const express = require("express");
const bodyParser = require("body-parser");
const sqlite = require("sqlite3").verbose();
const path = require("path");


// Create the express server
const port = 3000;
const app = express();

// Serve the static elements and allow body parsing
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

// Create the database
const database = new sqlite.Database("database.sqlite");

// Add the posts table if it doesn't already exist
//! `content` is JSON code. Might not be the best practice but it works
// TODO: don't store upvotes and downvotes severalty. Have a signed int and it can be negative or positive
database.run(`CREATE TABLE IF NOT EXISTS posts(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, upvotes INTEGER, downvotes INTEGER)`);



// Create and add a post to the database
app.post("/add-post", (request, response) => {
	console.log("New-post called");

	// Get the data from the post body
	const body = request.body;

	// Extract the data from the body
	const title = body["title"];
	const content = body["content"];
	const upvotes = body["upvotes"];
	const downvotes = body["downvotes"];

	// Add the data to the database
	database.run(`INSERT INTO posts(title, content, upvotes, downvotes) VALUES (?, ?, ?, ?)`,
		[title, content, upvotes, downvotes],
		(error) => {
			
			// Check for errors
			if (error) {
				response.status(500).send("Error adding post.")
				return;
			}
			
			response.status(200).send("Post has been added.")
		}
	);
});



// TODO: don't get every single post every single time
app.get("/posts", (request, response) => {
	console.log("posts called");

	database.all(`SELECT * FROM posts`, (error, data) => {
		// Check for if there was an error
		if (error) {
			response.status(500).send("Error while getting posts.");
			return;
		}

		// Return all of the notes
		response.status(200).json(data);
	});
});



// Run/start the server
app.listen(port, () => {
	console.log(`🔥 Server listening on port ${port}\n- http://localhost:${port}\n`);
});