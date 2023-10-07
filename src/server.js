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
// TODO: Add try/catch
app.post("/create-post", async (request, response) => {
	console.log("/create-post");

	// Connect to the database
	await mongoClient.connect();

	// Get the cloak database, and posts collection
	const database = mongoClient.db(mongoName);
	const posts = database.collection("posts");

	// Add the posts request body to the database
	await posts.insertOne(request.body);

	// Done
	response.send(200);
});



// Start the express server
app.listen(port, () => {

	console.log(`Server listening on port ${port}!\nConnect via "http://localhost:${port}"\n`);
});