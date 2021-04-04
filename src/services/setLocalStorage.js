export function setLocalStorage() {
	localStorage.getItem('FavoriteCharacters') === null &&
		localStorage.setItem('FavoriteCharacters', '[]');
}

export function setSessionStorage() {
	sessionStorage.setItem('offset', 0);
}
