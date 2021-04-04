import { getCharacterById } from '../services/api.js';
import { hideSection, displaySection } from '../handlers/handleSections.js';
import {
	allSuperheroesSection,
	favoriteSection,
	characterSection,
} from '../handlers/domElements.js';
import {
	activateSpinner,
	desactivateSpinner,
} from '../handlers/handleSpinner.js';
import { displayCharacterSection } from './displayCharacterSection.js';

export async function displayMaximizedCharacter(id) {
	hideSection(allSuperheroesSection);
	hideSection(favoriteSection);
	activateSpinner();
	displaySection(characterSection, 'character-container');
	characterSection.innerHTML = '';
	const character = await getCharacterById(id);
	desactivateSpinner();
	displayCharacterSection(characterSection, character);
}
