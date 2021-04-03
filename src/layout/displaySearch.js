import { getCharactersBySearch } from '../services/api.js';
import { displayCharacterCard } from '../layout/displayCharacterCard.js';
import {
	activateSpinner,
	desactivateSpinner,
} from '../handlers/handleSpinner.js';
import {
	titleSection,
	allSuperheroesSection,
	favoriteSection,
	characterSection,
} from '../handlers/domElements.js';
import { hideSection, displaySection } from '../handlers/handleSections.js';

export async function displaySearch(search) {
	event.preventDefault();
	activateSpinner();
	hideSection(titleSection);
	hideSection(favoriteSection);
	hideSection(characterSection);
	allSuperheroesSection.innerHTML = '';
	const allCharacters = await getCharactersBySearch(search);
	allCharacters.map((character) => {
		displayCharacterCard(allSuperheroesSection, character);
	});
	displaySection(titleSection, 'superheroes-section');
	desactivateSpinner();
}
