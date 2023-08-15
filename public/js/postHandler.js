// Get the create post button
document.querySelector("#createPost").addEventListener("click", async () => {

	// Get the post details
	// TODO: Make UI
	const title = prompt("Post title");
	const content = prompt("Post content (json)", `[{"type": "text", "content": ""}]`);

	// Create the post's request body
	const postBody = {
		title: title,
		content: content
	};

	// Send a HTTP post request to create the post
	await httpPost("/create-post", postBody);
});