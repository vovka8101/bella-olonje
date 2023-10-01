const handleTouchmove = function(e) {
	console.log('touchmove event on');
	e.preventDefault();
	return false;
}

window.onload = function () {
	const menu_btn = document.querySelector('.burger-button');
	const mobile_menu = document.querySelector('.mobile-nav');
	const body = document.querySelector('body');


	menu_btn.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
		menu_btn.classList.toggle('burger-button--active');
		mobile_menu.classList.toggle('mobile-nav--active');
		body.classList.toggle('hide');
	});

	body.addEventListener('touchmove', handleTouchmove, false);
	// body.removeEventListener('touchmove', handleTouchmove);
}
