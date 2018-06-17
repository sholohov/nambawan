(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _tools = require('./tools');

var Tools = _interopRequireWildcard(_tools);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

document.addEventListener("DOMContentLoaded", function () {
	scrollBtnInit();

	var main = document.querySelector('#main');
	var btn = document.querySelector('#move-to-top');

	main.style.overflow = "hidden";

	/**
  * Показывает кнопку скрола когда страница ниже высоты экрана
  */
	main.addEventListener("scroll", function () {
		if (main.scrollTop > main.clientHeight) {
			btn.classList.add('visible');
		} else {
			btn.classList.remove('visible');
		}
	});
});

/**
 * Прокрутка страницы к началу
 */
function scrollBtnInit() {
	var btn = document.querySelector('#move-to-top');
	var main = document.querySelector('#main');

	btn.addEventListener('click', function () {
		Tools.scrollPageToTop(main);
	});
}

window.addEventListener("load", onWindowLoad);
function onWindowLoad() {
	var preloader = document.querySelector("#preloader");
	var main = document.querySelector('#main');

	// показ экрана загрузкич
	preloader.classList.add("end");
	main.style.overflow = "";
	document.body.classList.add("loaded");
}

},{"./tools":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _onWindowResize = require('./onWindowResize');

Object.defineProperty(exports, 'onWindowResize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_onWindowResize).default;
  }
});

var _scrollPageToTop = require('./scrollPageToTop');

Object.defineProperty(exports, 'scrollPageToTop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scrollPageToTop).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./onWindowResize":3,"./scrollPageToTop":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Олеживает изменение размеров окна браузера и вызывает cb если привысело время указанное в duration
 * @param {function} cb каллбэк
 * @param {number} [duration=300] интервал в миллисикундах
 */
function onWindowResize(cb) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

	var timeout = void 0;
	window.addEventListener('resize', function () {
		clearTimeout(timeout);
		timeout = setTimeout(cb, duration);
	});
}

exports.default = onWindowResize;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function scrollPageToTop(el) {
	function getScroll() {
		return el.scrollTop || document.documentElement.scrollTop;
	}
	function run() {
		if (getScroll() > 0) {
			window.scrollBy(0, -Math.max(getScroll() / 6, 1));
			requestAnimationFrame(run);
		}
	}
	run();
}
exports.default = scrollPageToTop;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvb25XaW5kb3dSZXNpemUuanMiLCJzcmMvanMvdG9vbHMvc2Nyb2xsUGFnZVRvVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFBLFNBQUEsUUFBQSxTQUFBLENBQUE7O0lBQVksUTs7Ozs7Ozs7Ozs7Ozs7QUFFWixTQUFBLGdCQUFBLENBQUEsa0JBQUEsRUFBOEMsWUFBTTtBQUNuRDs7QUFFQSxLQUFNLE9BQU8sU0FBQSxhQUFBLENBQWIsT0FBYSxDQUFiO0FBQ0EsS0FBTSxNQUFNLFNBQUEsYUFBQSxDQUFaLGNBQVksQ0FBWjs7QUFFQSxNQUFBLEtBQUEsQ0FBQSxRQUFBLEdBQUEsUUFBQTs7QUFFQTs7O0FBR0EsTUFBQSxnQkFBQSxDQUFBLFFBQUEsRUFBZ0MsWUFBTTtBQUNyQyxNQUFJLEtBQUEsU0FBQSxHQUFpQixLQUFyQixZQUFBLEVBQXdDO0FBQ3ZDLE9BQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxTQUFBO0FBREQsR0FBQSxNQUVPO0FBQ04sT0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLFNBQUE7QUFDQTtBQUxGLEVBQUE7QUFYRCxDQUFBOztBQW9CQTs7O0FBR0EsU0FBQSxhQUFBLEdBQXlCO0FBQ3hCLEtBQU0sTUFBTSxTQUFBLGFBQUEsQ0FBWixjQUFZLENBQVo7QUFDQSxLQUFNLE9BQU8sU0FBQSxhQUFBLENBQWIsT0FBYSxDQUFiOztBQUVBLEtBQUEsZ0JBQUEsQ0FBQSxPQUFBLEVBQThCLFlBQU07QUFDbkMsUUFBQSxlQUFBLENBQUEsSUFBQTtBQURELEVBQUE7QUFHQTs7QUFFRCxPQUFBLGdCQUFBLENBQUEsTUFBQSxFQUFBLFlBQUE7QUFDQSxTQUFBLFlBQUEsR0FBd0I7QUFDdkIsS0FBTSxZQUFZLFNBQUEsYUFBQSxDQUFsQixZQUFrQixDQUFsQjtBQUNBLEtBQU0sT0FBTyxTQUFBLGFBQUEsQ0FBYixPQUFhLENBQWI7O0FBRUE7QUFDQSxXQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQTtBQUNBLE1BQUEsS0FBQSxDQUFBLFFBQUEsR0FBQSxFQUFBO0FBQ0EsVUFBQSxJQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxRQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O21EQzNDUSxPOzs7Ozs7Ozs7b0RBQ0EsTzs7Ozs7Ozs7Ozs7Ozs7QUNEVDs7Ozs7QUFLQSxTQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQTRDO0FBQUEsS0FBaEIsV0FBZ0IsVUFBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFVBQUEsQ0FBQSxNQUFBLFNBQUEsR0FBQSxVQUFBLENBQUEsQ0FBQSxHQUFMLEdBQUs7O0FBQzNDLEtBQUksVUFBQSxLQUFKLENBQUE7QUFDQSxRQUFBLGdCQUFBLENBQUEsUUFBQSxFQUFrQyxZQUFXO0FBQzVDLGVBQUEsT0FBQTtBQUNBLFlBQVUsV0FBQSxFQUFBLEVBQVYsUUFBVSxDQUFWO0FBRkQsRUFBQTtBQUlBOztrQkFFYyxjOzs7Ozs7OztBQ2JmLFNBQUEsZUFBQSxDQUFBLEVBQUEsRUFBNkI7QUFDNUIsVUFBQSxTQUFBLEdBQXFCO0FBQ3BCLFNBQU8sR0FBQSxTQUFBLElBQWdCLFNBQUEsZUFBQSxDQUF2QixTQUFBO0FBQ0E7QUFDRCxVQUFBLEdBQUEsR0FBZTtBQUNkLE1BQUksY0FBSixDQUFBLEVBQXFCO0FBQ3BCLFVBQUEsUUFBQSxDQUFBLENBQUEsRUFBbUIsQ0FBQyxLQUFBLEdBQUEsQ0FBVSxjQUFWLENBQUEsRUFBcEIsQ0FBb0IsQ0FBcEI7QUFDQSx5QkFBQSxHQUFBO0FBQ0E7QUFDRDtBQUNEO0FBQ0E7a0JBQ2MsZSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCAqIGFzIFRvb2xzIGZyb20gJy4vdG9vbHMnXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0c2Nyb2xsQnRuSW5pdCgpO1xyXG5cdFxyXG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZlLXRvLXRvcCcpO1xyXG5cclxuXHRtYWluLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcblx0LyoqXHJcblx0ICog0J/QvtC60LDQt9GL0LLQsNC10YIg0LrQvdC+0L/QutGDINGB0LrRgNC+0LvQsCDQutC+0LPQtNCwINGB0YLRgNCw0L3QuNGG0LAg0L3QuNC20LUg0LLRi9GB0L7RgtGLINGN0LrRgNCw0L3QsFxyXG5cdCAqL1xyXG5cdG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcblx0XHRpZiAobWFpbi5zY3JvbGxUb3AgPiBtYWluLmNsaWVudEhlaWdodCkge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiDQn9GA0L7QutGA0YPRgtC60LAg0YHRgtGA0LDQvdC40YbRiyDQuiDQvdCw0YfQsNC70YNcclxuICovXHJcbmZ1bmN0aW9uIHNjcm9sbEJ0bkluaXQoKSB7XHJcblx0Y29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vdmUtdG8tdG9wJyk7XHJcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcblxyXG5cdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFRvb2xzLnNjcm9sbFBhZ2VUb1RvcChtYWluKTtcclxuXHR9KTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG9uV2luZG93TG9hZCk7XHJcbmZ1bmN0aW9uIG9uV2luZG93TG9hZCgpIHtcclxuXHRjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZWxvYWRlclwiKTtcclxuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHRcclxuXHQvLyDQv9C+0LrQsNC3INGN0LrRgNCw0L3QsCDQt9Cw0LPRgNGD0LfQutC40YdcclxuXHRwcmVsb2FkZXIuY2xhc3NMaXN0LmFkZChcImVuZFwiKTtcclxuXHRtYWluLnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcclxuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XHJcbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIG9uV2luZG93UmVzaXplIH0gZnJvbSAnLi9vbldpbmRvd1Jlc2l6ZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2Nyb2xsUGFnZVRvVG9wIH0gZnJvbSAnLi9zY3JvbGxQYWdlVG9Ub3AnOyIsIi8qKlxyXG4gKiDQntC70LXQttC40LLQsNC10YIg0LjQt9C80LXQvdC10L3QuNC1INGA0LDQt9C80LXRgNC+0LIg0L7QutC90LAg0LHRgNCw0YPQt9C10YDQsCDQuCDQstGL0LfRi9Cy0LDQtdGCIGNiINC10YHQu9C4INC/0YDQuNCy0YvRgdC10LvQviDQstGA0LXQvNGPINGD0LrQsNC30LDQvdC90L7QtSDQsiBkdXJhdGlvblxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiDQutCw0LvQu9Cx0Y3QulxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTMwMF0g0LjQvdGC0LXRgNCy0LDQuyDQsiDQvNC40LvQu9C40YHQuNC60YPQvdC00LDRhVxyXG4gKi9cclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoY2IsIGR1cmF0aW9uID0gMzAwKSB7XHJcblx0bGV0IHRpbWVvdXQ7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoY2IsIGR1cmF0aW9uKTtcclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb25XaW5kb3dSZXNpemU7IiwiZnVuY3Rpb24gc2Nyb2xsUGFnZVRvVG9wKGVsKSB7XHJcblx0ZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xyXG5cdFx0cmV0dXJuIGVsLnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBydW4oKSB7XHJcblx0XHRpZiAoZ2V0U2Nyb2xsKCkgPiAwKSB7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxCeSgwLCAtTWF0aC5tYXgoKGdldFNjcm9sbCgpIC8gNiksIDEpKTtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1bik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJ1bigpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNjcm9sbFBhZ2VUb1RvcDsiXX0=
