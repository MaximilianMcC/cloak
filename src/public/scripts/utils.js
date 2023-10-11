// HTTP post request
async function httpPost(url, data) {
	console.log("Sending POST request");

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});
}

// HTTP get request
async function httpGet(url) {
	console.log("Sending GET request");

	const response = await fetch(url);
	return response.json()
}
