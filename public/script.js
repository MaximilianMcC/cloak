
// Create a post
function createPost(title, content) {

	// Convert the post object from the title and content
	const post = {
		"title": title,
		"content": content,
		"upvotes": 0,
		"downvotes": 0
	};

	// Send a HTTP post to the server to add the post
	httpPost("/add-post", post);

	// Render the post
	//! renderPost(post);
}


async function httpPost(url, body) {

	await fetch(url, {
		method: "POST",
		body: JSON.stringify(body),
		headers: { "Content-Type": "application/json" }
	});
}