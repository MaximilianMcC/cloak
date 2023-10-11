


// Make the create post button make a new post
document.querySelector("#createPostButton").addEventListener("click", () => {

	// Scroll up to the create post container
	// TODO: Show in modal
	document.querySelector("#createPost").scrollIntoView({ behavior: "smooth" });
});

// TODO: Make character counter visual update
// Update the character count for the content input
const contentInput = document.querySelector("textarea#textContent");
let previousInput = "";
contentInput.addEventListener("input", () => {
	
	// Get how many characters there are
	const characters = contentInput.value.length;
	//! contentInput.setAttribute("characterCount", `${characters}/256`);

	// Check for if there are over 256 characters and prevent default
	if (characters >= 256) contentInput.value = previousInput;

	// Assign the last previous
	previousInput = contentInput.value;
});