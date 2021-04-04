import { setPagination } from '../handlers/handlePagination.js';

const apikey = '3b8548d851e8057b2974d44b95ef0d2a';
const hash = 'c2a10480e50127f8982ce7a9496ed504';
const apiAutentication = `ts=1&apikey=${apikey}&hash=${hash}`;

export async function getAllCharacters(offset) {
	try {
		const response = await fetch(
			`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&offset=${offset}&${apiAutentication}`
		);
		const charactersJson = await response.json();
		console.log(charactersJson);
		setPagination(charactersJson);
		const characters = charactersJson.data.results;
		return characters;
	} catch (error) {
		console.error('error', error);
	}
}

export async function getCharactersBySearch(search) {
	try {
		const response = await fetch(
			`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&${apiAutentication}`
		);
		const searchJson = await response.json();
		const searchResults = searchJson.data.results;
		return searchResults;
	} catch (error) {
		console.error('error', error);
	}
}

export async function getCharacterById(id) {
	try {
		const response = await fetch(
			`https://gateway.marvel.com:443/v1/public/characters/${id}?${apiAutentication}`
		);
		const characterJson = await response.json();
		const character = characterJson.data.results[0];
		return character;
	} catch (error) {
		console.error('error', error);
	}
}
