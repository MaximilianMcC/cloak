// HTTP post request
async function post(url, data) {

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});
}

// HTTP get request
async function get(url) {

	const response = await fetch(url);
	return response.json()
}