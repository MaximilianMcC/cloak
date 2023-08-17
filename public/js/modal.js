document.addEventListener("DOMContentLoaded", () => {

	// Find all of the close buttons inside modals
	const modalCloseButtons = document.querySelectorAll("#modalCloseButton");
	modalCloseButtons.forEach((button) => {

		// Close the modal when they click on it
		button.addEventListener("click", () => {

			const modal = button.closest(".modal-wrapper");
			toggleModal(modal.id);
		});
	});

	
	// Find all of the open buttons
	const modalOpenButtons = document.querySelectorAll("button[modalId]");
	modalOpenButtons.forEach(button => {
		
		// Open the modal when they click on it
		button.addEventListener("click", () => {
			
			toggleModal(button.getAttribute("modalId"));
		});
	});

});




function toggleModal(modalId) {

	const modalElement = document.getElementById(modalId);
	modalElement.classList.toggle("visible");
}