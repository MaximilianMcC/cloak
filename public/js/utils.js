async function httpPost(url, body) {

	try {
		// Create, then send the request
		const response = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		});

		// Return the response
		// return await response.json();

	} catch(error) {
		console.error(error);
		throw error;
	}
}