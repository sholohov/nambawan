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

	btn.style.right = main.scrollWidth - main.clientWidth + 'px';
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

	// Предупреждение для IE
	if (!/Chrome|Safari|Opera/.test(navigator.userAgent)) {
		var msg = document.querySelector('#no-supported-message');
		var close = msg.querySelector('.close');

		setTimeout(function () {
			msg.classList.add('visible');
		}, 500);

		close.addEventListener('click', function () {
			msg.classList.remove('visible');

			setTimeout(function () {
				msg.classList.add('animation-end');
			}, 1000);
		});
	}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvb25XaW5kb3dSZXNpemUuanMiLCJzcmMvanMvdG9vbHMvc2Nyb2xsUGFnZVRvVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFBLFNBQUEsUUFBQSxTQUFBLENBQUE7O0lBQVksUTs7Ozs7Ozs7Ozs7Ozs7QUFFWixTQUFBLGdCQUFBLENBQUEsa0JBQUEsRUFBOEMsWUFBTTtBQUNuRDs7QUFFQSxLQUFNLE9BQU8sU0FBQSxhQUFBLENBQWIsT0FBYSxDQUFiO0FBQ0EsS0FBTSxNQUFNLFNBQUEsYUFBQSxDQUFaLGNBQVksQ0FBWjs7QUFFQSxLQUFBLEtBQUEsQ0FBQSxLQUFBLEdBQWtCLEtBQUEsV0FBQSxHQUFtQixLQUFuQixXQUFBLEdBQWxCLElBQUE7QUFDQSxNQUFBLEtBQUEsQ0FBQSxRQUFBLEdBQUEsUUFBQTs7QUFFQTs7O0FBR0EsTUFBQSxnQkFBQSxDQUFBLFFBQUEsRUFBZ0MsWUFBTTtBQUNyQyxNQUFJLEtBQUEsU0FBQSxHQUFpQixLQUFyQixZQUFBLEVBQXdDO0FBQ3ZDLE9BQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxTQUFBO0FBREQsR0FBQSxNQUVPO0FBQ04sT0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLFNBQUE7QUFDQTtBQUxGLEVBQUE7O0FBUUE7QUFDQSxLQUFJLENBQUUsc0JBQUEsSUFBQSxDQUEyQixVQUFqQyxTQUFNLENBQU4sRUFBd0Q7QUFDdkQsTUFBTSxNQUFNLFNBQUEsYUFBQSxDQUFaLHVCQUFZLENBQVo7QUFDQSxNQUFNLFFBQVEsSUFBQSxhQUFBLENBQWQsUUFBYyxDQUFkOztBQUVBLGFBQVcsWUFBTTtBQUNoQixPQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsU0FBQTtBQURELEdBQUEsRUFBQSxHQUFBOztBQUlBLFFBQUEsZ0JBQUEsQ0FBQSxPQUFBLEVBQWdDLFlBQU07QUFDckMsT0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLFNBQUE7O0FBRUEsY0FBVyxZQUFNO0FBQ2hCLFFBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxlQUFBO0FBREQsSUFBQSxFQUFBLElBQUE7QUFIRCxHQUFBO0FBT0E7QUFwQ0YsQ0FBQTs7QUF1Q0E7OztBQUdBLFNBQUEsYUFBQSxHQUF5QjtBQUN4QixLQUFNLE1BQU0sU0FBQSxhQUFBLENBQVosY0FBWSxDQUFaO0FBQ0EsS0FBTSxPQUFPLFNBQUEsYUFBQSxDQUFiLE9BQWEsQ0FBYjs7QUFFQSxLQUFBLGdCQUFBLENBQUEsT0FBQSxFQUE4QixZQUFNO0FBQ25DLFFBQUEsZUFBQSxDQUFBLElBQUE7QUFDQSxVQUFBLEdBQUEsQ0FBQSxPQUFBO0FBRkQsRUFBQTtBQUlBOztBQUVELE9BQUEsZ0JBQUEsQ0FBQSxNQUFBLEVBQUEsWUFBQTtBQUNBLFNBQUEsWUFBQSxHQUF3QjtBQUN2QixLQUFNLFlBQVksU0FBQSxhQUFBLENBQWxCLFlBQWtCLENBQWxCO0FBQ0EsS0FBTSxPQUFPLFNBQUEsYUFBQSxDQUFiLE9BQWEsQ0FBYjs7QUFFQTtBQUNBLFdBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBO0FBQ0EsTUFBQSxLQUFBLENBQUEsUUFBQSxHQUFBLEVBQUE7QUFDQSxVQUFBLElBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLFFBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7bURDL0RRLE87Ozs7Ozs7OztvREFDQSxPOzs7Ozs7Ozs7Ozs7OztBQ0RUOzs7OztBQUtBLFNBQUEsY0FBQSxDQUFBLEVBQUEsRUFBNEM7QUFBQSxLQUFoQixXQUFnQixVQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsVUFBQSxDQUFBLE1BQUEsU0FBQSxHQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQUwsR0FBSzs7QUFDM0MsS0FBSSxVQUFBLEtBQUosQ0FBQTtBQUNBLFFBQUEsZ0JBQUEsQ0FBQSxRQUFBLEVBQWtDLFlBQVc7QUFDNUMsZUFBQSxPQUFBO0FBQ0EsWUFBVSxXQUFBLEVBQUEsRUFBVixRQUFVLENBQVY7QUFGRCxFQUFBO0FBSUE7O2tCQUVjLGM7Ozs7Ozs7O0FDYmYsU0FBQSxlQUFBLENBQUEsRUFBQSxFQUE2QjtBQUM1QixNQUFLLE1BQU0sU0FBWCxlQUFBOztBQUVBLFVBQUEsU0FBQSxHQUFxQjtBQUNwQixTQUFPLEdBQVAsU0FBQTtBQUNBOztBQUVELFVBQUEsR0FBQSxHQUFlO0FBQ2QsTUFBSSxjQUFKLENBQUEsRUFBcUI7QUFDcEIsTUFBQSxRQUFBLENBQUEsQ0FBQSxFQUFlLENBQUMsS0FBQSxHQUFBLENBQVUsY0FBVixDQUFBLEVBQWhCLENBQWdCLENBQWhCO0FBQ0EseUJBQUEsR0FBQTtBQUNBO0FBQ0Q7QUFDRDtBQUNBO2tCQUNjLGUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgKiBhcyBUb29scyBmcm9tICcuL3Rvb2xzJ1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG5cdHNjcm9sbEJ0bkluaXQoKTtcclxuXHRcclxuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHRjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW92ZS10by10b3AnKTtcclxuXHJcblx0YnRuLnN0eWxlLnJpZ2h0ID0gbWFpbi5zY3JvbGxXaWR0aCAtIG1haW4uY2xpZW50V2lkdGggKyAncHgnO1xyXG5cdG1haW4uc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuXHQvKipcclxuXHQgKiDQn9C+0LrQsNC30YvQstCw0LXRgiDQutC90L7Qv9C60YMg0YHQutGA0L7Qu9CwINC60L7Qs9C00LAg0YHRgtGA0LDQvdC40YbQsCDQvdC40LbQtSDQstGL0YHQvtGC0Ysg0Y3QutGA0LDQvdCwXHJcblx0ICovXHJcblx0bWFpbi5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuXHRcdGlmIChtYWluLnNjcm9sbFRvcCA+IG1haW4uY2xpZW50SGVpZ2h0KSB7XHJcblx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJylcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vINCf0YDQtdC00YPQv9GA0LXQttC00LXQvdC40LUg0LTQu9GPIElFXHJcblx0aWYgKCEoL0Nocm9tZXxTYWZhcml8T3BlcmEvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpKSB7XHJcblx0XHRjb25zdCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm8tc3VwcG9ydGVkLW1lc3NhZ2UnKTtcclxuXHRcdGNvbnN0IGNsb3NlID0gbXNnLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRtc2cuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG5cdFx0fSwgNTAwKTtcclxuXHJcblx0XHRjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0bXNnLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdG1zZy5jbGFzc0xpc3QuYWRkKCdhbmltYXRpb24tZW5kJyk7XHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiDQn9GA0L7QutGA0YPRgtC60LAg0YHRgtGA0LDQvdC40YbRiyDQuiDQvdCw0YfQsNC70YNcclxuICovXHJcbmZ1bmN0aW9uIHNjcm9sbEJ0bkluaXQoKSB7XHJcblx0Y29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vdmUtdG8tdG9wJyk7XHJcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcblxyXG5cdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFRvb2xzLnNjcm9sbFBhZ2VUb1RvcChtYWluKTtcclxuXHRcdGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG5cdH0pO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgb25XaW5kb3dMb2FkKTtcclxuZnVuY3Rpb24gb25XaW5kb3dMb2FkKCkge1xyXG5cdGNvbnN0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJlbG9hZGVyXCIpO1xyXG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cdFxyXG5cdC8vINC/0L7QutCw0Lcg0Y3QutGA0LDQvdCwINC30LDQs9GA0YPQt9C60LjRh1xyXG5cdHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKFwiZW5kXCIpO1xyXG5cdG1haW4uc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xyXG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRlZFwiKTtcclxufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgb25XaW5kb3dSZXNpemUgfSBmcm9tICcuL29uV2luZG93UmVzaXplJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzY3JvbGxQYWdlVG9Ub3AgfSBmcm9tICcuL3Njcm9sbFBhZ2VUb1RvcCc7IiwiLyoqXHJcbiAqINCe0LvQtdC20LjQstCw0LXRgiDQuNC30LzQtdC90LXQvdC40LUg0YDQsNC30LzQtdGA0L7QsiDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwINC4INCy0YvQt9GL0LLQsNC10YIgY2Ig0LXRgdC70Lgg0L/RgNC40LLRi9GB0LXQu9C+INCy0YDQtdC80Y8g0YPQutCw0LfQsNC90L3QvtC1INCyIGR1cmF0aW9uXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiINC60LDQu9C70LHRjdC6XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249MzAwXSDQuNC90YLQtdGA0LLQsNC7INCyINC80LjQu9C70LjRgdC40LrRg9C90LTQsNGFXHJcbiAqL1xyXG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZShjYiwgZHVyYXRpb24gPSAzMDApIHtcclxuXHRsZXQgdGltZW91dDtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChjYiwgZHVyYXRpb24pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvbldpbmRvd1Jlc2l6ZTsiLCJmdW5jdGlvbiBzY3JvbGxQYWdlVG9Ub3AoZWwpIHtcclxuXHRlbCA9IGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xyXG5cdFx0cmV0dXJuIGVsLnNjcm9sbFRvcDtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gcnVuKCkge1xyXG5cdFx0aWYgKGdldFNjcm9sbCgpID4gMCkge1xyXG5cdFx0XHRlbC5zY3JvbGxCeSgwLCAtTWF0aC5tYXgoKGdldFNjcm9sbCgpIC8gNiksIDEpKTtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1bik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJ1bigpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNjcm9sbFBhZ2VUb1RvcDsiXX0=
