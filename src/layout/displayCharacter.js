import { displayMaximizedCharacter } from './displayMaximizedCharacter.js';

export function displayCharacter(container, character) {
	const characterContainer = document.createElement('article');
	characterContainer.classList.add('character-card-container');

	const characterPhoto = document.createElement('img');
	characterPhoto.classList.add('character-photo');
	characterPhoto.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
	characterPhoto.alt = character.name;
	characterPhoto.addEventListener('click', () => {
		displayMaximizedCharacter(character.id);
	});

	const characterInfo = document.createElement('div');
	characterInfo.classList.add('character-info');

	const characterName = document.createElement('p');
	characterName.classList.add('character-name');
	characterName.textContent = character.name;
	characterName.addEventListener('click', () => {
		displayMaximizedCharacter(character.id);
	});

	const favIcon = document.createElement('i');
	favIcon.classList.add('far');
	favIcon.classList.add('fa-heart');
	favIcon.classList.add('icons');
	// va a faltar el onclick

	container.appendChild(characterContainer);
	characterContainer.appendChild(characterPhoto);
	characterContainer.appendChild(characterInfo);
	characterInfo.appendChild(characterName);
	characterInfo.appendChild(favIcon);
}
