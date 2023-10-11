// Check for if the create post button is pressed
document.querySelector("#submitPostButton").addEventListener("click", async () => {
	console.log("Creating post");

	// Get all of the inputs
	const title = document.querySelector("#title").value.trim();
	const textContent = document.querySelector("#textContent").value.trim();

	// Get the date/time that the post was created
	const date = Date.now();

	// Check for if the user actually entered something
	if (title.length == 0 || textContent.length == 0) {
		
		// TODO: Make nice looking modal notification thing
		alert("Add a title and content please");
		return;
	}

	// Add all of the content
	// TODO: Make dynamic for more content types and whatnot when do scrum v2
	let content = [
		{
			type: "text",
			content: textContent
		}
	];

	// Put everything into JSON for sending
	const post = {
		title: title,
		date: date,
		content: content
	};

	// Send it to the server
	await httpPost("./create-post", post);

	// Clear the input form so that the user can create another post
	document.querySelector("#title").value = "";
	document.querySelector("#textContent").value = "";

	// Render the post for the client
});