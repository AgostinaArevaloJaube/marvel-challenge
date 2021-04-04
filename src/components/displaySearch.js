import { getCharactersBySearch } from '../services/api.js';
import { displayCharacterCard } from './displayCharacterCard.js';
import {
	activateSpinner,
	desactivateSpinner,
} from '../handlers/handleSpinner.js';
import {
	allSuperheroesSection,
	allSuperheroesContainer,
	searchContainer,
	favoriteSection,
	characterSection,
	errorContainer,
} from '../handlers/domElements.js';
import { hideSection, displaySection } from '../handlers/handleSections.js';
import { displayError } from './displayError.js';

export async function displaySearch(search) {
	hideSection(allSuperheroesSection);
	hideSection(favoriteSection);
	hideSection(characterSection);
	hideSection(errorContainer);
	activateSpinner();
	const allCharacters = await getCharactersBySearch(search);
	if (allCharacters.length === 0) {
		displayError('No matches found');
		hideSection(allSuperheroesContainer);
	} else {
		searchContainer.innerHTML = '';
		hideSection(errorContainer);
		displaySection(searchContainer, 'all-superheroes');
		allCharacters.map((character) => {
			displayCharacterCard(searchContainer, character);
		});
	}
	desactivateSpinner();
}
