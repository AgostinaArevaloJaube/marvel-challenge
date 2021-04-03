export function displayError(error) {
	const errorContainer = document.querySelector('#error-container');
	errorContainer.classList.remove('hidden');
	errorContainer.classList.add('error-container');
	errorContainer.innerHTML = `
	<p class="error-text">
		<span class="error-color">Oops!</span> ${error}
	</p>
	<a href="index.html" class="regular-button back-home-btn">Back home</a>
	`;
}
