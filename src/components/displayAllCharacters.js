import { getAllCharacters } from '../services/api.js';
import { displayCharacterCard } from './displayCharacterCard.js';
import {
	activateSpinner,
	desactivateSpinner,
} from '../handlers/handleSpinner.js';
import {
	allSuperheroesSection,
	allSuperheroesContainer,
	favoriteSection,
	characterSection,
	errorContainer,
} from '../handlers/domElements.js';
import { hideSection, displaySection } from '../handlers/handleSections.js';

export async function displayAllCharacters(offset) {
	activateSpinner();
	hideSection(allSuperheroesSection);
	hideSection(favoriteSection);
	hideSection(characterSection);
	hideSection(errorContainer);
	allSuperheroesContainer.innerHTML = '';
	const allCharacters = await getAllCharacters(offset);
	allCharacters.map((character) =>
		displayCharacterCard(allSuperheroesContainer, character)
	);
	displaySection(allSuperheroesSection, 'superheroes-section');
	desactivateSpinner();
}
