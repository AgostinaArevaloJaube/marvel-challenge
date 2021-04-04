import {
	hero,
	favoriteSection,
	characterSection,
	searchContainer,
	errorContainer,
	favoriteContainer,
	allSuperheroesSection,
} from '../handlers/domElements.js';
import {
	activateSpinner,
	desactivateSpinner,
} from '../handlers/handleSpinner.js';
import { displaySection, hideSection } from '../handlers/handleSections.js';
import { displayError } from '../components/displayError.js';
import { displayCharacterCard } from '../components/displayCharacterCard.js';

export function displayFavorites() {
	let arrFavoritesCharacters = JSON.parse(
		localStorage.getItem('FavoriteCharacters')
	);

	activateSpinner();
	hideSection(characterSection);
	hideSection(searchContainer);
	hideSection(errorContainer);
	hideSection(allSuperheroesSection);
	hideSection(hero);
	displaySection(favoriteSection);
	favoriteContainer.innerHTML = '';
	if (arrFavoritesCharacters.length > 0) {
		desactivateSpinner();
		arrFavoritesCharacters.map((character) =>
			displayCharacterCard(favoriteContainer, character)
		);
	} else {
		desactivateSpinner();
		const errorMessage = `You don't have any favorite superheroes yet.`;
		displayError(errorMessage);
	}
}
