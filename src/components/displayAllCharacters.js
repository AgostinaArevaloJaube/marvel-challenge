import { getAllCharacters } from '../services/api.js';
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

export async function displayAllCharacters() {
	activateSpinner();
	hideSection(titleSection);
	hideSection(favoriteSection);
	hideSection(characterSection);
	hideSection(errorContainer);
	const allCharacters = await getAllCharacters();
	allCharacters.map((character) =>
		displayCharacterCard(allSuperheroesSection, character)
	);
	displaySection(titleSection, 'superheroes-section');
	desactivateSpinner();
}
