function scrollPageToTop() {
	function getScroll() {
		return document.documentElement.scrollTop;
	}
	function run() {
		if (getScroll() > 0) {
			window.scrollBy(0, -Math.max((getScroll() / 6), 1));
			requestAnimationFrame(run);
		}
	}
	run();
}
export default scrollPageToTop;