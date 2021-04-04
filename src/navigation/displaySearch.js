import { getCharactersBySearch } from '../services/api.js';
import { displayCharacterCard } from '../components/displayCharacterCard.js';
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
import { displayError } from '../components/displayError.js';

export async function displaySearch(search) {
	hideSection(allSuperheroesSection);
	hideSection(favoriteSection);
	hideSection(characterSection);
	hideSection(errorContainer);
	activateSpinner();
	searchContainer.innerHTML = '';
	const allCharacters = await getCharactersBySearch(search);
	if (allCharacters.length === 0) {
		displayError('No matches found');
		hideSection(allSuperheroesContainer);
	} else {
		hideSection(errorContainer);
		searchContainer.innerHTML = '';
		displaySection(searchContainer, 'all-superheroes');
		allCharacters.map((character) => {
			displayCharacterCard(searchContainer, character);
		});
	}
	desactivateSpinner();
}
