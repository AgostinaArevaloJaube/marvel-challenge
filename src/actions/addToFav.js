function addToFav(name, id, path, extension) {
	const arrFavoritesCharacters = JSON.parse(
		localStorage.getItem('FavoriteCharacters')
	);

	let objCharacter = {
		username: name,
		id: id,
		thumbnail: {
			path: path,
			extension: extension,
		},
	};

	arrFavoritesCharacters.push(objCharacter);

	localStorage.setItem(
		'FavoriteCharacters',
		JSON.stringify(arrFavoritesCharacters)
	);

	// que vaya a favoritos
}
