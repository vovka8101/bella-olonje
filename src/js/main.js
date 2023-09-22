window.onload = function () {
	const menu_btn = document.querySelector('.burger-button');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('burger-button--active');
		mobile_menu.classList.toggle('mobile-nav--active');
	});
}
