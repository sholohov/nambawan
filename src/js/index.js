import * as Tools from './tools'

document.addEventListener("DOMContentLoaded", () => {
	scrollBtnInit();
	
	const main = document.querySelector('#main');
	const btn = document.querySelector('#move-to-top');

	btn.style.right = main.scrollWidth - main.clientWidth + 'px';
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
		console.log('click');
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