let arrFavoritesCharacters = JSON.parse(
	localStorage.getItem('FavoriteCharacters')
);

export function displayCharacterSection(section, character) {
	const characterContainer = document.createElement('article');
	characterContainer.innerHTML = `
	<div class="character-section">
		<div class="character-description">
			<div class="character-text-container">
				<h3 class="character-name">${character.name}</h3>
				${
					JSON.parse(
						localStorage.getItem('FavoriteCharacters').includes(character.id)
					)
						? `<i class="far fa-trash-alt icons" onclick="removeFromFav('${character.id}')"></i>`
						: `<i class="far fa-heart icons" onclick="addToFav('${character.name}', '${character.id}', '${character.thumbnail.path}','${character.thumbnail.extension}')"></i>`
				}
			</div>
			<p>
				${
					character.description === ''
						? 'We are creating this character. No description available yet. We promise that we are working very hard to achieve it.'
						: character.description
				}
			</p>
		</div>
		<img
			class="character-photo"
			src=${character.thumbnail.path}.${character.thumbnail.extension}
			alt=${character.name}
		/>
	</div>
	<a href="index.html" class="regular-button back-home-btn">Back home</a>
	`;
	section.appendChild(characterContainer);
}
