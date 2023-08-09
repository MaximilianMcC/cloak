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


	// TODO: Make there a way to choose how many to return. 50 default
	const count = 50;
	let data;

	try {
		// Get the posts collection from the database
		const posts = database.collection("posts");

		// Get the most recent posts from the post creation date
		//? `-1` is descending order
		//? `$lte` is <=
		const timestamp = parseInt(request.query.time);
		const query = { creation: { $gte: timestamp } };
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