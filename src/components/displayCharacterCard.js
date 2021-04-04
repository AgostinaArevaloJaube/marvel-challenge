export function displayCharacterCard(container, character) {
	const characterContainer = document.createElement('div');
	characterContainer.classList.add('character-card-container');
	characterContainer.innerHTML = `
	<img
		class="character-photo"
		src=${character.thumbnail.path}.${character.thumbnail.extension}
		alt=${character.name}
		onclick="displayMaximizedCharacter(${character.id})"
	>
	<div class="character-info">
		<p class="character-name" onclick="displayMaximizedCharacter(${character.id})">${character.name}</p>
	</div>`;

	container.appendChild(characterContainer);
}
