// Take in a md string (array of lines), and return html string
function parseMarkdown(markdown) {
	
	/* Supported markdown:
		- h1
		- h2
		- h3
		- a
		- bold
		- italic
		- underline
		- strikethrough
	*/

	// Loop through every line in the markdown
	let output = "";
	markdown.forEach(line => {
		
		// Check for what it starts with
		let changed = false;
		// TODO: Use switch

		// Headers
		if (line.startsWith("# ")) {
			const parsedMarkdown = `<h1>${line}</h1>`.replace("# ", "");
			output += parsedMarkdown;
			changed = true;

		} else if (line.startsWith("## ")) {
			const parsedMarkdown = `<h2>${line}</h2>`.replace("## ", "");
			output += parsedMarkdown;
			changed = true;

		} else if (line.startsWith("### ")) {
			const parsedMarkdown = `<h3>${line}</h3>`.replace("### ", "");
			output += parsedMarkdown;
			changed = true;

		}
		
		// Loop through every character
		let changedText = "";
		line.forEach(character => {
			
			// Bold
			if (character == "*") {
				changedText += character;
			}

		});

		// Nothing
		if (changed === false) output += line;

	});

	return output;
}