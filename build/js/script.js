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
		console.log('click');
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
	el = el || document.documentElement;

	function getScroll() {
		return el.scrollTop;
	}

	function run() {
		if (getScroll() > 0) {
			el.scrollBy(0, -Math.max(getScroll() / 6, 1));
			requestAnimationFrame(run);
		}
	}
	run();
}
exports.default = scrollPageToTop;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvb25XaW5kb3dSZXNpemUuanMiLCJzcmMvanMvdG9vbHMvc2Nyb2xsUGFnZVRvVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFBLFNBQUEsUUFBQSxTQUFBLENBQUE7O0lBQVksUTs7Ozs7Ozs7Ozs7Ozs7QUFFWixTQUFBLGdCQUFBLENBQUEsa0JBQUEsRUFBOEMsWUFBTTtBQUNuRDs7QUFFQSxLQUFNLE9BQU8sU0FBQSxhQUFBLENBQWIsT0FBYSxDQUFiO0FBQ0EsS0FBTSxNQUFNLFNBQUEsYUFBQSxDQUFaLGNBQVksQ0FBWjs7QUFFQSxNQUFBLEtBQUEsQ0FBQSxRQUFBLEdBQUEsUUFBQTs7QUFFQTs7O0FBR0EsTUFBQSxnQkFBQSxDQUFBLFFBQUEsRUFBZ0MsWUFBTTtBQUNyQyxNQUFJLEtBQUEsU0FBQSxHQUFpQixLQUFyQixZQUFBLEVBQXdDO0FBQ3ZDLE9BQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxTQUFBO0FBREQsR0FBQSxNQUVPO0FBQ04sT0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLFNBQUE7QUFDQTtBQUxGLEVBQUE7QUFYRCxDQUFBOztBQW9CQTs7O0FBR0EsU0FBQSxhQUFBLEdBQXlCO0FBQ3hCLEtBQU0sTUFBTSxTQUFBLGFBQUEsQ0FBWixjQUFZLENBQVo7QUFDQSxLQUFNLE9BQU8sU0FBQSxhQUFBLENBQWIsT0FBYSxDQUFiOztBQUVBLEtBQUEsZ0JBQUEsQ0FBQSxPQUFBLEVBQThCLFlBQU07QUFDbkMsUUFBQSxlQUFBLENBQUEsSUFBQTtBQUNBLFVBQUEsR0FBQSxDQUFBLE9BQUE7QUFGRCxFQUFBO0FBSUE7O0FBRUQsT0FBQSxnQkFBQSxDQUFBLE1BQUEsRUFBQSxZQUFBO0FBQ0EsU0FBQSxZQUFBLEdBQXdCO0FBQ3ZCLEtBQU0sWUFBWSxTQUFBLGFBQUEsQ0FBbEIsWUFBa0IsQ0FBbEI7QUFDQSxLQUFNLE9BQU8sU0FBQSxhQUFBLENBQWIsT0FBYSxDQUFiOztBQUVBO0FBQ0EsV0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLEtBQUE7QUFDQSxNQUFBLEtBQUEsQ0FBQSxRQUFBLEdBQUEsRUFBQTtBQUNBLFVBQUEsSUFBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsUUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7OzttREM1Q1EsTzs7Ozs7Ozs7O29EQUNBLE87Ozs7Ozs7Ozs7Ozs7O0FDRFQ7Ozs7O0FBS0EsU0FBQSxjQUFBLENBQUEsRUFBQSxFQUE0QztBQUFBLEtBQWhCLFdBQWdCLFVBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxVQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsVUFBQSxDQUFBLENBQUEsR0FBTCxHQUFLOztBQUMzQyxLQUFJLFVBQUEsS0FBSixDQUFBO0FBQ0EsUUFBQSxnQkFBQSxDQUFBLFFBQUEsRUFBa0MsWUFBVztBQUM1QyxlQUFBLE9BQUE7QUFDQSxZQUFVLFdBQUEsRUFBQSxFQUFWLFFBQVUsQ0FBVjtBQUZELEVBQUE7QUFJQTs7a0JBRWMsYzs7Ozs7Ozs7QUNiZixTQUFBLGVBQUEsQ0FBQSxFQUFBLEVBQTZCO0FBQzVCLE1BQUssTUFBTSxTQUFYLGVBQUE7O0FBRUEsVUFBQSxTQUFBLEdBQXFCO0FBQ3BCLFNBQU8sR0FBUCxTQUFBO0FBQ0E7O0FBRUQsVUFBQSxHQUFBLEdBQWU7QUFDZCxNQUFJLGNBQUosQ0FBQSxFQUFxQjtBQUNwQixNQUFBLFFBQUEsQ0FBQSxDQUFBLEVBQWUsQ0FBQyxLQUFBLEdBQUEsQ0FBVSxjQUFWLENBQUEsRUFBaEIsQ0FBZ0IsQ0FBaEI7QUFDQSx5QkFBQSxHQUFBO0FBQ0E7QUFDRDtBQUNEO0FBQ0E7a0JBQ2MsZSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCAqIGFzIFRvb2xzIGZyb20gJy4vdG9vbHMnXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0c2Nyb2xsQnRuSW5pdCgpO1xyXG5cdFxyXG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZlLXRvLXRvcCcpO1xyXG5cclxuXHRtYWluLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcblx0LyoqXHJcblx0ICog0J/QvtC60LDQt9GL0LLQsNC10YIg0LrQvdC+0L/QutGDINGB0LrRgNC+0LvQsCDQutC+0LPQtNCwINGB0YLRgNCw0L3QuNGG0LAg0L3QuNC20LUg0LLRi9GB0L7RgtGLINGN0LrRgNCw0L3QsFxyXG5cdCAqL1xyXG5cdG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcblx0XHRpZiAobWFpbi5zY3JvbGxUb3AgPiBtYWluLmNsaWVudEhlaWdodCkge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiDQn9GA0L7QutGA0YPRgtC60LAg0YHRgtGA0LDQvdC40YbRiyDQuiDQvdCw0YfQsNC70YNcclxuICovXHJcbmZ1bmN0aW9uIHNjcm9sbEJ0bkluaXQoKSB7XHJcblx0Y29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vdmUtdG8tdG9wJyk7XHJcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcblxyXG5cdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFRvb2xzLnNjcm9sbFBhZ2VUb1RvcChtYWluKTtcclxuXHRcdGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG5cdH0pO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgb25XaW5kb3dMb2FkKTtcclxuZnVuY3Rpb24gb25XaW5kb3dMb2FkKCkge1xyXG5cdGNvbnN0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJlbG9hZGVyXCIpO1xyXG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cdFxyXG5cdC8vINC/0L7QutCw0Lcg0Y3QutGA0LDQvdCwINC30LDQs9GA0YPQt9C60LjRh1xyXG5cdHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKFwiZW5kXCIpO1xyXG5cdG1haW4uc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xyXG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRlZFwiKTtcclxufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgb25XaW5kb3dSZXNpemUgfSBmcm9tICcuL29uV2luZG93UmVzaXplJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzY3JvbGxQYWdlVG9Ub3AgfSBmcm9tICcuL3Njcm9sbFBhZ2VUb1RvcCc7IiwiLyoqXHJcbiAqINCe0LvQtdC20LjQstCw0LXRgiDQuNC30LzQtdC90LXQvdC40LUg0YDQsNC30LzQtdGA0L7QsiDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwINC4INCy0YvQt9GL0LLQsNC10YIgY2Ig0LXRgdC70Lgg0L/RgNC40LLRi9GB0LXQu9C+INCy0YDQtdC80Y8g0YPQutCw0LfQsNC90L3QvtC1INCyIGR1cmF0aW9uXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiINC60LDQu9C70LHRjdC6XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249MzAwXSDQuNC90YLQtdGA0LLQsNC7INCyINC80LjQu9C70LjRgdC40LrRg9C90LTQsNGFXHJcbiAqL1xyXG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZShjYiwgZHVyYXRpb24gPSAzMDApIHtcclxuXHRsZXQgdGltZW91dDtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChjYiwgZHVyYXRpb24pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvbldpbmRvd1Jlc2l6ZTsiLCJmdW5jdGlvbiBzY3JvbGxQYWdlVG9Ub3AoZWwpIHtcclxuXHRlbCA9IGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xyXG5cdFx0cmV0dXJuIGVsLnNjcm9sbFRvcDtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gcnVuKCkge1xyXG5cdFx0aWYgKGdldFNjcm9sbCgpID4gMCkge1xyXG5cdFx0XHRlbC5zY3JvbGxCeSgwLCAtTWF0aC5tYXgoKGdldFNjcm9sbCgpIC8gNiksIDEpKTtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1bik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJ1bigpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNjcm9sbFBhZ2VUb1RvcDsiXX0=
