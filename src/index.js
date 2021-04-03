import { displayAllCharacters } from './components/displayAllCharacters.js';
import { displaySearch } from './components/displaySearch.js';

displayAllCharacters();

const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');

searchInput.addEventListener('keypress', (event) => {
	if (event.keyCode === 13) {
		displaySearch(searchInput.value);
	}
});

searchInput.addEventListener('input', (event) => {
	if (searchInput.value.length === 0) {
		displayAllCharacters();
	} else {
		displaySearch(searchInput.value);
	}
});

searchButton.addEventListener('click', (event) => {
	if (searchInput.value === '') {
		displayAllCharacters();
	} else {
		displaySearch(searchInput.value);
	}
});
