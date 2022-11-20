const popupBody = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupBtn = document.querySelector('.nav__send');

if (popupBtn) {
	popupBtn.addEventListener('click', (e) => {
		popupBody.classList.add('_active');
		document.body.classList.add('_lock');
	})
}

if (popupClose) {
	popupClose.addEventListener('click', (e) => {
		popupBody.classList.remove('_active');
		document.body.classList.remove('_lock');

		e.preventDefault();
	})
}