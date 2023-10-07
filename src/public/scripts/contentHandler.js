// Get posts when the website loads, and when the new posts button is pressed
document.addEventListener("DOMContentLoaded", () => getPosts());
document.querySelector("#newPostsButton").addEventListener("click", () => getPosts());


// Get posts, then render them
async function getPosts() {
	console.log("Getting posts");

	// Get the 64 newest posts
	const posts = await httpGet("/posts?count=64");

	// Iterate over every post and render it
	const postsHTML = document.querySelector(".posts");
	posts.forEach(post => {

		const postHTML = renderPost(post);
		postsHTML.innerHTML += postHTML;
	});
}

