import { getAllCharacters } from '../services/api.js';
import {
	activateSpinner,
	desactivateSpinner,
} from '../handlers/handleSpinner.js';
import { displayCharacter } from '../layout/displayCharacter.js';
import { allSuperheroesSection } from '../handlers/domElements.js';
import { hideSection, displaySection } from '../handlers/handleSections.js';
import {
	titleSection,
	favoriteSection,
	characterSection,
} from '../handlers/domElements.js';

export async function displayAllCharacters() {
	activateSpinner();
	hideSection(titleSection);
	hideSection(favoriteSection);
	hideSection(characterSection);
	const allCharacters = await getAllCharacters();
	allCharacters.map((character) =>
		displayCharacter(allSuperheroesSection, character)
	);
	displaySection(titleSection, 'superheroes-section');
	desactivateSpinner();
}
