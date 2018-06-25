import * as Tools from './tools'

document.addEventListener("DOMContentLoaded", () => {
	scrollBtnInit();
	
	const main = document.querySelector('#main');
	const btn = document.querySelector('#move-to-top');

	/**
	 * Ширина вертикального скроллбара
	 * @param {Element} el 
	 */
	function getScrollbarWidth(el) {
		return el.offsetWidth - el.clientWidth;
	}

	btn.style.right = getScrollbarWidth(main) + 'px';

	Tools.onWindowResize(() => {
		btn.style.right = getScrollbarWidth(main) + 'px';
	}, 0);

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

	// Предупреждение для IE
	if (!(/Chrome|Safari|Opera/.test(navigator.userAgent))) {
		const msg = document.querySelector('#no-supported-message');
		const close = msg.querySelector('.close');

		setTimeout(() => {
			msg.classList.add('visible');
		}, 500);

		close.addEventListener('click', () => {
			msg.classList.remove('visible');

			setTimeout(() => {
				msg.classList.add('animation-end');
			}, 1000);
		});
	}
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
	
	// показ экрана загрузкичика
	preloader.classList.add("end");
	main.style.overflow = "";
	document.body.classList.add("loaded");
}