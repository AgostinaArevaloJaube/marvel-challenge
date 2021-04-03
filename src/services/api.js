const apikey = '333fe9e446edc26b33ea40a636c061ee';
const hash = 'b620ac10b8586fc8c277e9fdaffc0ef6';
const apiAutentication = `ts=1&apikey=${apikey}&hash=${hash}`;

// ! SACAR LOS CONSOLE.LOG

export async function getAllCharacters() {
	try {
		const response = await fetch(
			`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&offset=${12}&${apiAutentication}`
		);
		const charactersJson = await response.json();
		console.log(charactersJson);
		const characters = charactersJson.data.results;
		console.log(characters);
		return characters;
	} catch (error) {
		console.error('error', error);
	}
}

// ? Esta función es para cuando el usuario realiza una búsqueda

export async function getCharactersBySearch(search) {
	try {
		const response = await fetch(
			`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&${apiAutentication}`
		);
		const searchJson = await response.json();
		console.log(searchJson);
		const searchResults = searchJson.data.results;
		console.log(searchResults);
		return searchResults;
	} catch (error) {
		console.error('error', error);
	}
}

// ? Esta función es para cuando el usuario clickea el personaje

export async function getCharacterById(id) {
	try {
		const response = await fetch(
			`https://gateway.marvel.com:443/v1/public/characters/${id}?${apiAutentication}`
		);
		const characterJson = await response.json();
		console.log(characterJson);
		const character = characterJson.data.results[0];
		// devuelve un objeto con el personaje clickeado
		console.log(character);
		return character;
	} catch (error) {
		console.error('error', error);
	}
}
