import * as Tools from './tools'

document.addEventListener("DOMContentLoaded", () => {
	scrollBtnInit();
	document.body.style.overflow = "hidden";
});

function scrollBtnInit() {
	const btn = document.querySelector('#move-to-top');
	btn.addEventListener('click', Tools.scrollPageToTop);
}

window.addEventListener("load", onWindowLoad);

function onWindowLoad() {
	const preloader = document.querySelector("#preloader");
	preloader.classList.add("end");
	const body = document.body;
	body.style.overflow = "";
	body.classList.add("loaded");
}