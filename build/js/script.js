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

	/**
  * Ширина вертикального скроллбара
  * @param {Element} el 
  */
	function getScrollbarWidth(el) {
		return el.offsetWidth - el.clientWidth;
	}

	btn.style.right = getScrollbarWidth(main) + 'px';

	Tools.onWindowResize(function () {
		btn.style.right = getScrollbarWidth(main) + 'px';
	}, 0);

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
	});
}

window.addEventListener("load", onWindowLoad);
function onWindowLoad() {
	var preloader = document.querySelector("#preloader");
	var main = document.querySelector('#main');

	// показ экрана загрузкичика
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
/**
 * Прокрутка эоемента вверх
 * @param {Element} el Контейнер для прокрутки
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvb25XaW5kb3dSZXNpemUuanMiLCJzcmMvanMvdG9vbHMvc2Nyb2xsUGFnZVRvVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFBLFNBQUEsUUFBQSxTQUFBLENBQUE7O0lBQVksUTs7Ozs7Ozs7Ozs7Ozs7QUFFWixTQUFBLGdCQUFBLENBQUEsa0JBQUEsRUFBOEMsWUFBTTtBQUNuRDs7QUFFQSxLQUFNLE9BQU8sU0FBQSxhQUFBLENBQWIsT0FBYSxDQUFiO0FBQ0EsS0FBTSxNQUFNLFNBQUEsYUFBQSxDQUFaLGNBQVksQ0FBWjs7QUFFQTs7OztBQUlBLFVBQUEsaUJBQUEsQ0FBQSxFQUFBLEVBQStCO0FBQzlCLFNBQU8sR0FBQSxXQUFBLEdBQWlCLEdBQXhCLFdBQUE7QUFDQTs7QUFFRCxLQUFBLEtBQUEsQ0FBQSxLQUFBLEdBQWtCLGtCQUFBLElBQUEsSUFBbEIsSUFBQTs7QUFFQSxPQUFBLGNBQUEsQ0FBcUIsWUFBTTtBQUMxQixNQUFBLEtBQUEsQ0FBQSxLQUFBLEdBQWtCLGtCQUFBLElBQUEsSUFBbEIsSUFBQTtBQURELEVBQUEsRUFBQSxDQUFBOztBQUlBLE1BQUEsS0FBQSxDQUFBLFFBQUEsR0FBQSxRQUFBOztBQUVBOzs7QUFHQSxNQUFBLGdCQUFBLENBQUEsUUFBQSxFQUFnQyxZQUFNO0FBQ3JDLE1BQUksS0FBQSxTQUFBLEdBQWlCLEtBQXJCLFlBQUEsRUFBd0M7QUFDdkMsT0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLFNBQUE7QUFERCxHQUFBLE1BRU87QUFDTixPQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsU0FBQTtBQUNBO0FBTEYsRUFBQTs7QUFRQTtBQUNBLEtBQUksQ0FBRSxzQkFBQSxJQUFBLENBQTJCLFVBQWpDLFNBQU0sQ0FBTixFQUF3RDtBQUN2RCxNQUFNLE1BQU0sU0FBQSxhQUFBLENBQVosdUJBQVksQ0FBWjtBQUNBLE1BQU0sUUFBUSxJQUFBLGFBQUEsQ0FBZCxRQUFjLENBQWQ7O0FBRUEsYUFBVyxZQUFNO0FBQ2hCLE9BQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxTQUFBO0FBREQsR0FBQSxFQUFBLEdBQUE7O0FBSUEsUUFBQSxnQkFBQSxDQUFBLE9BQUEsRUFBZ0MsWUFBTTtBQUNyQyxPQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsU0FBQTs7QUFFQSxjQUFXLFlBQU07QUFDaEIsUUFBQSxTQUFBLENBQUEsR0FBQSxDQUFBLGVBQUE7QUFERCxJQUFBLEVBQUEsSUFBQTtBQUhELEdBQUE7QUFPQTtBQWpERixDQUFBOztBQW9EQTs7O0FBR0EsU0FBQSxhQUFBLEdBQXlCO0FBQ3hCLEtBQU0sTUFBTSxTQUFBLGFBQUEsQ0FBWixjQUFZLENBQVo7QUFDQSxLQUFNLE9BQU8sU0FBQSxhQUFBLENBQWIsT0FBYSxDQUFiOztBQUVBLEtBQUEsZ0JBQUEsQ0FBQSxPQUFBLEVBQThCLFlBQU07QUFDbkMsUUFBQSxlQUFBLENBQUEsSUFBQTtBQURELEVBQUE7QUFHQTs7QUFFRCxPQUFBLGdCQUFBLENBQUEsTUFBQSxFQUFBLFlBQUE7QUFDQSxTQUFBLFlBQUEsR0FBd0I7QUFDdkIsS0FBTSxZQUFZLFNBQUEsYUFBQSxDQUFsQixZQUFrQixDQUFsQjtBQUNBLEtBQU0sT0FBTyxTQUFBLGFBQUEsQ0FBYixPQUFhLENBQWI7O0FBRUE7QUFDQSxXQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQTtBQUNBLE1BQUEsS0FBQSxDQUFBLFFBQUEsR0FBQSxFQUFBO0FBQ0EsVUFBQSxJQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxRQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O21EQzNFUSxPOzs7Ozs7Ozs7b0RBQ0EsTzs7Ozs7Ozs7Ozs7Ozs7QUNEVDs7Ozs7QUFLQSxTQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQTRDO0FBQUEsS0FBaEIsV0FBZ0IsVUFBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFVBQUEsQ0FBQSxNQUFBLFNBQUEsR0FBQSxVQUFBLENBQUEsQ0FBQSxHQUFMLEdBQUs7O0FBQzNDLEtBQUksVUFBQSxLQUFKLENBQUE7QUFDQSxRQUFBLGdCQUFBLENBQUEsUUFBQSxFQUFrQyxZQUFXO0FBQzVDLGVBQUEsT0FBQTtBQUNBLFlBQVUsV0FBQSxFQUFBLEVBQVYsUUFBVSxDQUFWO0FBRkQsRUFBQTtBQUlBOztrQkFFYyxjOzs7Ozs7OztBQ2JmOzs7O0FBSUEsU0FBQSxlQUFBLENBQUEsRUFBQSxFQUE2QjtBQUM1QixNQUFLLE1BQU0sU0FBWCxlQUFBOztBQUVBLFVBQUEsU0FBQSxHQUFxQjtBQUNwQixTQUFPLEdBQVAsU0FBQTtBQUNBOztBQUVELFVBQUEsR0FBQSxHQUFlO0FBQ2QsTUFBSSxjQUFKLENBQUEsRUFBcUI7QUFDcEIsTUFBQSxRQUFBLENBQUEsQ0FBQSxFQUFlLENBQUMsS0FBQSxHQUFBLENBQVUsY0FBVixDQUFBLEVBQWhCLENBQWdCLENBQWhCO0FBQ0EseUJBQUEsR0FBQTtBQUNBO0FBQ0Q7QUFDRDtBQUNBO2tCQUNjLGUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgKiBhcyBUb29scyBmcm9tICcuL3Rvb2xzJ1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG5cdHNjcm9sbEJ0bkluaXQoKTtcclxuXHRcclxuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHRjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW92ZS10by10b3AnKTtcclxuXHJcblx0LyoqXHJcblx0ICog0KjQuNGA0LjQvdCwINCy0LXRgNGC0LjQutCw0LvRjNC90L7Qs9C+INGB0LrRgNC+0LvQu9Cx0LDRgNCwXHJcblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbCBcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aChlbCkge1xyXG5cdFx0cmV0dXJuIGVsLm9mZnNldFdpZHRoIC0gZWwuY2xpZW50V2lkdGg7XHJcblx0fVxyXG5cclxuXHRidG4uc3R5bGUucmlnaHQgPSBnZXRTY3JvbGxiYXJXaWR0aChtYWluKSArICdweCc7XHJcblxyXG5cdFRvb2xzLm9uV2luZG93UmVzaXplKCgpID0+IHtcclxuXHRcdGJ0bi5zdHlsZS5yaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKG1haW4pICsgJ3B4JztcclxuXHR9LCAwKTtcclxuXHJcblx0bWFpbi5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblx0XHJcblx0LyoqXHJcblx0ICog0J/QvtC60LDQt9GL0LLQsNC10YIg0LrQvdC+0L/QutGDINGB0LrRgNC+0LvQsCDQutC+0LPQtNCwINGB0YLRgNCw0L3QuNGG0LAg0L3QuNC20LUg0LLRi9GB0L7RgtGLINGN0LrRgNCw0L3QsFxyXG5cdCAqL1xyXG5cdG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcblx0XHRpZiAobWFpbi5zY3JvbGxUb3AgPiBtYWluLmNsaWVudEhlaWdodCkge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLyDQn9GA0LXQtNGD0L/RgNC10LbQtNC10L3QuNC1INC00LvRjyBJRVxyXG5cdGlmICghKC9DaHJvbWV8U2FmYXJpfE9wZXJhLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSkge1xyXG5cdFx0Y29uc3QgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vLXN1cHBvcnRlZC1tZXNzYWdlJyk7XHJcblx0XHRjb25zdCBjbG9zZSA9IG1zZy5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0bXNnLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuXHRcdH0sIDUwMCk7XHJcblxyXG5cdFx0Y2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdG1zZy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRtc2cuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uLWVuZCcpO1xyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSk7XHJcblxyXG4vKipcclxuICog0J/RgNC+0LrRgNGD0YLQutCwINGB0YLRgNCw0L3QuNGG0Ysg0Log0L3QsNGH0LDQu9GDXHJcbiAqL1xyXG5mdW5jdGlvbiBzY3JvbGxCdG5Jbml0KCkge1xyXG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZlLXRvLXRvcCcpO1xyXG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cclxuXHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRUb29scy5zY3JvbGxQYWdlVG9Ub3AobWFpbik7XHJcblx0fSk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvbldpbmRvd0xvYWQpO1xyXG5mdW5jdGlvbiBvbldpbmRvd0xvYWQoKSB7XHJcblx0Y29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVsb2FkZXJcIik7XHJcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcblx0XHJcblx0Ly8g0L/QvtC60LDQtyDRjdC60YDQsNC90LAg0LfQsNCz0YDRg9C30LrQuNGH0LjQutCwXHJcblx0cHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJlbmRcIik7XHJcblx0bWFpbi5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XHJcblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xyXG59IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBvbldpbmRvd1Jlc2l6ZSB9IGZyb20gJy4vb25XaW5kb3dSZXNpemUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNjcm9sbFBhZ2VUb1RvcCB9IGZyb20gJy4vc2Nyb2xsUGFnZVRvVG9wJzsiLCIvKipcclxuICog0J7Qu9C10LbQuNCy0LDQtdGCINC40LfQvNC10L3QtdC90LjQtSDRgNCw0LfQvNC10YDQvtCyINC+0LrQvdCwINCx0YDQsNGD0LfQtdGA0LAg0Lgg0LLRi9C30YvQstCw0LXRgiBjYiDQtdGB0LvQuCDQv9GA0LjQstGL0YHQtdC70L4g0LLRgNC10LzRjyDRg9C60LDQt9Cw0L3QvdC+0LUg0LIgZHVyYXRpb25cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2Ig0LrQsNC70LvQsdGN0LpcclxuICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0zMDBdINC40L3RgtC10YDQstCw0Lsg0LIg0LzQuNC70LvQuNGB0LjQutGD0L3QtNCw0YVcclxuICovXHJcbmZ1bmN0aW9uIG9uV2luZG93UmVzaXplKGNiLCBkdXJhdGlvbiA9IDMwMCkge1xyXG5cdGxldCB0aW1lb3V0O1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcclxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNiLCBkdXJhdGlvbik7XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9uV2luZG93UmVzaXplOyIsIi8qKlxyXG4gKiDQn9GA0L7QutGA0YPRgtC60LAg0Y3QvtC10LzQtdC90YLQsCDQstCy0LXRgNGFXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwg0JrQvtC90YLQtdC50L3QtdGAINC00LvRjyDQv9GA0L7QutGA0YPRgtC60LhcclxuICovXHJcbmZ1bmN0aW9uIHNjcm9sbFBhZ2VUb1RvcChlbCkge1xyXG5cdGVsID0gZWwgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuXHRmdW5jdGlvbiBnZXRTY3JvbGwoKSB7XHJcblx0XHRyZXR1cm4gZWwuc2Nyb2xsVG9wO1xyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBydW4oKSB7XHJcblx0XHRpZiAoZ2V0U2Nyb2xsKCkgPiAwKSB7XHJcblx0XHRcdGVsLnNjcm9sbEJ5KDAsIC1NYXRoLm1heCgoZ2V0U2Nyb2xsKCkgLyA2KSwgMSkpO1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cnVuKCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsUGFnZVRvVG9wOyJdfQ==
