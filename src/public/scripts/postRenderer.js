// Render a post
function renderPost(post) {
	console.log("Rendering post");

	// Get the title and creation date
	const title = post["title"];
	const date = new Date(post["date"]).toLocaleString("en-nz", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: true
	});

	// Get all of the content
	let postContent = [];
	post["content"].forEach(content => {
		
		// Check for what the content type is
		switch (content["type"]) {
			case "text":
				postContent += `<div class="text-content"><p>${content["content"]}</p></div>`;
				break;
		
			case "image":
				postContent += `<div class="file-content"><img src="${content["content"]}" alt="${title}"></div>`
				break;
		}

	});


	// Create the HTML
	return `
	<div class="container post">

		<!-- Post info header ting --> 
		<div class="title-content">
			<h1>${title}</h1>
			<h2>${date}</h2>
			<hr>
		</div>

		<!-- Post content --> 
		${postContent}

		<!-- Footer with like and report buttons -->
		<hr>
		<div class="footer">
			<div class="left">
				<button><i class="fa-solid fa-thumbs-up"></i></button>
				<button><i class="fa-solid fa-thumbs-down"></i></button>
			</div>
			<div class="right">
				<button><i class="fa-solid fa-triangle-exclamation"></i></button>
				<button><i class="fa-solid fa-share"></i></button
			</div>
		</div>
	</div>`;
}