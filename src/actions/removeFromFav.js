function removeFromFav(character) {
	let arrFavoritesCharacters = JSON.parse(
		localStorage.getItem('FavoriteCharacters')
	);

	for (let i = 0; i < arrFavoritesCharacters.length; i++) {
		if (arrFavoritesCharacters[i].id === character) {
			arrFavoritesCharacters.splice(i, 1);
			localStorage.setItem(
				'FavoriteCharacters',
				JSON.stringify(arrFavoritesCharacters)
			);
		}
	}

	// que vaya a favoritos
}
