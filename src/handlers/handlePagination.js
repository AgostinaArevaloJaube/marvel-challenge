import { displayAllCharacters } from '../components/displayAllCharacters.js';
import { getAllCharacters } from '../services/api.js';
import { paginationContainer } from './domElements.js';

export function goPrevPage() {
	let offset = parseInt(sessionStorage.getItem('offset'));
	offset -= 20;
	sessionStorage.setItem('offset', offset);
	displayAllCharacters(offset);
}

export function goNextPage() {
	let offset = parseInt(sessionStorage.getItem('offset'));
	offset += 20;
	sessionStorage.setItem('offset', offset);
	displayAllCharacters(offset);
}

export function setPagination(apiData) {
	const currentPage = apiData.data.offset / 20 + 1;
	const totalPages = Math.ceil(apiData.data.total / apiData.data.limit);

	paginationContainer.innerHTML = '';

	let buttonsContainer = document.createElement('div');
	buttonsContainer.classList.add('pagination-buttons-container');

	let prevPage = document.createElement('span');
	prevPage.classList.add('pagination-item');
	prevPage.onclick = goPrevPage;
	prevPage.textContent = '< PREV';

	let paginationText = document.createElement('p');
	paginationText.textContent = `Page ${currentPage} of ${totalPages}`;

	let nextPage = document.createElement('span');
	nextPage.classList.add('pagination-item');
	nextPage.onclick = goNextPage;
	nextPage.textContent = 'NEXT >';

	paginationContainer.appendChild(buttonsContainer);
	buttonsContainer.appendChild(prevPage);
	buttonsContainer.appendChild(nextPage);
	paginationContainer.appendChild(paginationText);
}
