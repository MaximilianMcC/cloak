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
const database = mongoClient.db(databaseName);

// Create a post, and add it to the database
app.post("/create-post", async (request, response) => {
	console.log("POST /create-post");

	try {
		// Get the posts collection from the database
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

	// Success
	response.send("Created and added post.", 200);
});


// Get the 50 most recent posts from a epoch timestamp
app.get("/posts", async (request, response) => {
	console.log("GET /posts");

	// Get the timestamp from the query data
	let timestamp = Date.now();
	if (request.query.time) timestamp = request.query.time;
	timestamp = parseInt(timestamp);

	// Get the count from the query data and clamp it
	let count = 50;
	if (request.query.count) count = clamp(request.query.count, 1, 250);

	let data;

	try {
		// Get the posts collection from the database
		const posts = database.collection("posts");

		// Get the most recent posts from the post creation date
		//? `-1` is descending order
		//? `$lte` is <=
		const query = { creation: { $lte: timestamp } };
		const result = posts.find(query).sort({ creation: -1 }).limit(count);
		data = await result.toArray();

	} catch (error) {

		// Error while using the database
		console.error("Error while using database\n", error);
		response.send(500);
		return;
	}

	// Success
	response.send(data, 200);
});


// Run/start the server
app.listen(port, () => {
	console.log(`Server listening on port ${port}\n- http://localhost:${port}\n`);
});











// clamp
function clamp(value, min, max) {
	return Math.max(min, Math.min(value, max));
}