function addToFav(name, id, path, extension) {
	const arrFavoritesCharacters = JSON.parse(
		localStorage.getItem('FavoriteCharacters')
	);

	let objCharacter = {
		name: name,
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

	displayFavorites();
}
