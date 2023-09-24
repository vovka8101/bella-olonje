window.onload = function () {
	const menu_btn = document.querySelector('.burger-button');
	const mobile_menu = document.querySelector('.mobile-nav');
	const page = document.querySelector('.page');

	menu_btn.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
		menu_btn.classList.toggle('burger-button--active');
		mobile_menu.classList.toggle('mobile-nav--active');
		page.classList.toggle('hide');
	});
}
