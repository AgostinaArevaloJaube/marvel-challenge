import { displayAllCharacters } from './components/displayAllCharacters.js';
import { displaySearch } from './components/displaySearch.js';
import { setLocalStorage } from './services/setLocalStorage.js';
import {
	favoritePage,
	searchInput,
	searchButton,
} from './handlers/domElements.js';
import { displayFavorites } from './navigation/displayFavorites.js';

displayAllCharacters();
setLocalStorage();

favoritePage.addEventListener('click', () => {
	displayFavorites();
});

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
