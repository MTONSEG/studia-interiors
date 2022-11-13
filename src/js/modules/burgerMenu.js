const iconBurger = document.querySelector('.burger__icon');
const menuBurger = document.querySelector('.burger-menu');

iconBurger.addEventListener('click', event => {
	iconBurger.classList.toggle('_active');
	menuBurger.classList.toggle('_active');
	document.body.classList.toggle('_lock');
})