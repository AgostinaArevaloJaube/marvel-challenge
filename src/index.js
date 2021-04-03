import { displayAllCharacters } from './layout/displayAllCharacters.js';
import { displaySearch } from './layout/displaySearch.js';

displayAllCharacters();

const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');

searchInput.addEventListener('keypress', (event) => {
	if (event.keyCode === 13) {
		displaySearch(searchInput.value);
	}
});

searchInput.addEventListener('input', (event) => {
	displaySearch(searchInput.value);
});

searchButton.addEventListener('click', (event) => {
	displaySearch(searchInput.value);
});
