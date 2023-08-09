// Imports and whatnot
const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const path = require("path");

// Create the express server
const port = 3000;
const app = express();

// Serve the static elements and allow body parsing
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

// MongoDB setting stuff
const mongoUri = "mongodb://127.0.0.1:27017";
const databaseName = "cloak";
const mongoClient = new MongoClient(mongoUri);

// Create a post, and add it to the database
app.post("/create-post", async (request, response) => {
	console.log("POST /create-post");

	try {
		// Connect to the database, and get the posts collection
		const database = mongoClient.db(databaseName);
		const posts = database.collection("posts");

		// Create the new post to add to the database
		const document = {
			title: request.body.title,
			content: request.body.content,
			upvotes: 1,
			downvotes: 0,
			creation: Date.now()
		}

		// Add the post into the database
		await posts.insertOne(document);

	} catch (error) {

		// Error while using the database
		console.error("Error while using database\n", error);
		response.send(500);
		return;
	}

	response.send("Created and added post.", 200);
});




// Run/start the server
app.listen(port, () => {
	console.log(`Server listening on port ${port}\n- http://localhost:${port}\n`);
});