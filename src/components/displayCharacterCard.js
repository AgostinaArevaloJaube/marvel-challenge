export function displayCharacterCard(container, character) {
	let arrFavoritesCharacters = JSON.parse(
		localStorage.getItem('FavoriteCharacters').includes(character.id)
	);

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

/*
		//  ${
		// 	arrFavoritesCharacters
		// 		? `<i class="far fa-trash-alt icons" onclick="removeFromFav('${character.id}')"></i>`
		// 		: `<i class="far fa-heart icons" onclick="addToFav('${character.name}', '${character.id}', '${character.thumbnail.path}','${character.thumbnail.extension}')"></i>`
		//  }

	*/
