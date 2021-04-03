import { getCharactersBySearch } from '../services/api.js';
import { displayCharacterCard } from './displayCharacterCard.js';
import {
	activateSpinner,
	desactivateSpinner,
} from '../handlers/handleSpinner.js';
import {
	titleSection,
	allSuperheroesSection,
	favoriteSection,
	characterSection,
	errorContainer,
} from '../handlers/domElements.js';
import { hideSection, displaySection } from '../handlers/handleSections.js';
import { displayError } from './displayError.js';

export async function displaySearch(search) {
	hideSection(titleSection);
	hideSection(favoriteSection);
	hideSection(characterSection);
	hideSection(errorContainer);
	activateSpinner();
	const allCharacters = await getCharactersBySearch(search);
	if (allCharacters.length === 0) {
		displayError('No matches found');
		hideSection(allSuperheroesSection);
		hideSection(titleSection);
	} else {
		allSuperheroesSection.innerHTML = '';
		displaySection(titleSection, 'superheroes-section');
		displaySection(allSuperheroesSection, 'all-superheroes');
		hideSection(errorContainer);
		allCharacters.map((character) => {
			displayCharacterCard(allSuperheroesSection, character);
		});
	}
	desactivateSpinner();
}
