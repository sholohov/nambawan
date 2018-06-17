import * as Tools from './tools'

document.addEventListener("DOMContentLoaded", () => {
	scrollBtnInit();
	
	const main = document.querySelector('#main');
	const btn = document.querySelector('#move-to-top');

	main.style.overflow = "hidden";

	/**
	 * Показывает кнопку скрола когда страница ниже высоты экрана
	 */
	main.addEventListener("scroll", () => {
		if (main.scrollTop > main.clientHeight) {
			btn.classList.add('visible')
		} else {
			btn.classList.remove('visible');
		}
	});
});

/**
 * Прокрутка страницы к началу
 */
function scrollBtnInit() {
	const btn = document.querySelector('#move-to-top');
	const main = document.querySelector('#main');

	btn.addEventListener('click', () => {
		Tools.scrollPageToTop(main);
	});
}

window.addEventListener("load", onWindowLoad);
function onWindowLoad() {
	const preloader = document.querySelector("#preloader");
	const main = document.querySelector('#main');
	
	// показ экрана загрузкич
	preloader.classList.add("end");
	main.style.overflow = "";
	document.body.classList.add("loaded");
}