import * as Tools from './tools'

document.addEventListener("DOMContentLoaded", () => {
	scrollBtnInit();
	document.body.style.overflow = "hidden";

	const de = document.documentElement;
	const btn = document.querySelector('#move-to-top');

	/**
	 * Показывает кнопку скрола когда страница ниже высоты экрана
	 */
	window.addEventListener("scroll", () => {
		if (de.scrollTop > de.clientHeight) {
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
	btn.addEventListener('click', Tools.scrollPageToTop);
}

window.addEventListener("load", onWindowLoad);
function onWindowLoad() {
	const preloader = document.querySelector("#preloader");
	const body = document.body;
	
	// показ экрана загрузкич
	preloader.classList.add("end");
	body.style.overflow = "";
	body.classList.add("loaded");
}