// Imports and whatnot
const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

// Express setup
const app = express();
const port = 3000;

// Add express dependency and middleware stuff
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


// Database connection stuff
const mongoName = "cloak";
const mongoUri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(mongoUri);

// Create a post
app.post("/create-post", async (request, response) => {
	console.log("/create-post");

	try {
		// Connect to the database
		await mongoClient.connect();

		// Get the cloak database, and posts collection
		const database = mongoClient.db(mongoName);
		const posts = database.collection("posts");

		// Add the posts request body to the database
		await posts.insertOne(request.body);

		// Done
		response.send(200);
		return;

	} catch (error) {

		// return 500 to user
		console.error(`Error while creating post:\n${error}`);
		response.send(500);
		return;
	}
});



// Get x most recent posts
app.get("/posts", async (request, response) => {
	console.log("GET /posts");

	// Save all of the data
	let data;

	// Settings
	let postsToGet = request.query.count;
	if (postsToGet == 0) postsToGet = 1;

	try {
		// Connect to the database
		await mongoClient.connect();

		// Get the cloak database, and posts collection
		const database = mongoClient.db(mongoName);
		const posts = database.collection("posts");

		// Get the timestamp of posts to get from
		const timestamp = Date.now();
		console.log(timestamp);

		// Query the database for all posts where the date is <= the current time
		//? $-1 is descending order
		const query = { date: { $lte: timestamp } };
		const result = posts.find(query).sort({ date: -1 }).limit(parseInt(postsToGet));

		// Get all of the data
		const data = await result.toArray();

		// Send the data back to the client
		response.send(data, 200);
		return;

	} catch (error) {
		
		// return 500 to user
		console.error(`Error while getting posts:\n${error}`);
		response.send(500);
		return;
	}
});



// Start the express server
app.listen(port, () => {

	console.log(`Server listening on port ${port}!\nConnect via "http://localhost:${port}"\n`);
});