//! this is all testing btw
document.addEventListener("DOMContentLoaded", () => {
	const post = JSON.stringify({

		title: "Test 123 fr",
		date: Date.now(),
		content: [
			{
				"type": "text",
				"content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quod tempora officia dignissimos totam error numquam quasi aspernatur nisi atque nemo laborum iusto voluptates officiis. Vero ex modi cum culpa?"
			},
			{
				"type": "image",
				"content": "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png"
			},
			{
				"type": "text",
				"content": "yea buddy🥱🥱🥱"
			}
		]
	});

	//! this isn't testing but still
	document.querySelector(".main").innerHTML += renderPost(post);
})