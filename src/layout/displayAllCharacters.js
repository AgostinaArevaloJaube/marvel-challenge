import { getAllCharacters } from '../services/api.js';
import {
	activateSpinner,
	desactivateSpinner,
} from '../handlers/handleSpinner.js';
import { displayCharacter } from '../layout/displayCharacter.js';
import { $allSuperheroesSection } from '../handlers/domElements.js';

export async function displayAllCharacters() {
	activateSpinner();
	const allCharacters = await getAllCharacters();
	allCharacters.map((character) =>
		displayCharacter($allSuperheroesSection, character)
	);
	desactivateSpinner();
}
