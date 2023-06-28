console.log("test");

// TODO: Use a template engine
function renderPost(post) {
	
	// Parse the content section
	let content = ``;
	JSON.parse(post["content"]).forEach(element => {
		console.log(element);

		// Check for the content type
		// TODO: use switch
		if (element["type"] === "text") content += `<p>${element["content"]}</p>`;
		else if (element["type"] === "image") content += `<img src="${element["content"]}" alt="${post["title"]}">`;
		else if (element["type"] === "poll") {
			
			// Create the poll HTML
			let pollHtml = ``;
			element["content"].forEach(pollOption => {
				
				// Turn the vote count into a percentage
				const percentage = Math.floor((pollOption["votes"] / 100) * 100);

				pollHtml += `
				<button>
					<div class="progress" style="width: ${percentage}%;"></div>
					<div class="info">
						<p class="title">${pollOption["text"]}</p>
						<p class="percentage">${percentage}%</p>
					</div>
				</button>
				`;
			});

			// Add all of the posts to the content HTML
			content += `<div class="poll">${pollHtml}</div>`;
		}
	});
	console.log(content);


	// Make the basic post HTML
	const postHtml = `
	<div class="post">
		<div class="post-details">
			<h1>${post["title"]}</h1>
			${content}
		</div>
		<hr class="divider">
		<div class="post-options">
			<div class="left">
				<button title="Like this post"><i class="fa-solid fa-angle-up"></i></i></button>
				<button title="Dislike this post"><i class="fa-solid fa-angle-down"></i></button>
			</div>
			<div class="right">
				<button title="Report as unsafe or inappropriate"><i class="fa-solid fa-triangle-exclamation"></i></button>
				<button title="Share post"><i class="fa-solid fa-share"></i></button>
			</div>
		</div>
	</div>
	`;

	// Add the post to the DOM
	document.getElementById("feed").innerHTML += postHtml;
}