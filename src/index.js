import { displayAllCharacters } from './components/displayAllCharacters.js';
import { displaySearch } from './navigation/displaySearch.js';
import { setLocalStorage, setSessionStorage } from './services/setStorage.js';
import {
	favoritePage,
	searchInput,
	searchButton,
} from './handlers/domElements.js';
import { displayFavorites } from './navigation/displayFavorites.js';

setLocalStorage();
setSessionStorage();
displayAllCharacters(0);

favoritePage.addEventListener('click', () => {
	displayFavorites();
});

searchInput.addEventListener('keypress', (event) => {
	if (event.keyCode === 13) {
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
