const $spinner = document.querySelector('#loader');

export function activateSpinner() {
	$spinner.className = 'loader';
}

export function desactivateSpinner() {
	$spinner.className = 'hidden';
}
