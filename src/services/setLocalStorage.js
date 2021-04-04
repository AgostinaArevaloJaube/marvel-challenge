export function setLocalStorage() {
	localStorage.getItem('FavoriteCharacters') === null &&
		localStorage.setItem('FavoriteCharacters', '[]');
}
