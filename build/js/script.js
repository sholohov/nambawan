(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _tools = require("./tools");

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
	document.body.style.overflow = "hidden";

	var de = document.documentElement;
	var btn = document.querySelector('#move-to-top');

	/**
  * Показывает кнопку скрола когда страница ниже высоты экрана
  */
	window.addEventListener("scroll", function () {
		if (de.scrollTop > de.clientHeight) {
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
	btn.addEventListener('click', Tools.scrollPageToTop);
}

window.addEventListener("load", onWindowLoad);
function onWindowLoad() {
	var preloader = document.querySelector("#preloader");
	var body = document.body;

	// показ экрана загрузкич
	preloader.classList.add("end");
	body.style.overflow = "";
	body.classList.add("loaded");
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
function scrollPageToTop() {
	function getScroll() {
		return document.documentElement.scrollTop;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvb25XaW5kb3dSZXNpemUuanMiLCJzcmMvanMvdG9vbHMvc2Nyb2xsUGFnZVRvVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFBLFNBQUEsUUFBQSxTQUFBLENBQUE7O0lBQVksUTs7Ozs7Ozs7Ozs7Ozs7QUFFWixTQUFBLGdCQUFBLENBQUEsa0JBQUEsRUFBOEMsWUFBTTtBQUNuRDtBQUNBLFVBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxRQUFBLEdBQUEsUUFBQTs7QUFFQSxLQUFNLEtBQUssU0FBWCxlQUFBO0FBQ0EsS0FBTSxNQUFNLFNBQUEsYUFBQSxDQUFaLGNBQVksQ0FBWjs7QUFFQTs7O0FBR0EsUUFBQSxnQkFBQSxDQUFBLFFBQUEsRUFBa0MsWUFBTTtBQUN2QyxNQUFJLEdBQUEsU0FBQSxHQUFlLEdBQW5CLFlBQUEsRUFBb0M7QUFDbkMsT0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLFNBQUE7QUFERCxHQUFBLE1BRU87QUFDTixPQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsU0FBQTtBQUNBO0FBTEYsRUFBQTtBQVZELENBQUE7O0FBbUJBOzs7QUFHQSxTQUFBLGFBQUEsR0FBeUI7QUFDeEIsS0FBTSxNQUFNLFNBQUEsYUFBQSxDQUFaLGNBQVksQ0FBWjtBQUNBLEtBQUEsZ0JBQUEsQ0FBQSxPQUFBLEVBQThCLE1BQTlCLGVBQUE7QUFDQTs7QUFFRCxPQUFBLGdCQUFBLENBQUEsTUFBQSxFQUFBLFlBQUE7QUFDQSxTQUFBLFlBQUEsR0FBd0I7QUFDdkIsS0FBTSxZQUFZLFNBQUEsYUFBQSxDQUFsQixZQUFrQixDQUFsQjtBQUNBLEtBQU0sT0FBTyxTQUFiLElBQUE7O0FBRUE7QUFDQSxXQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQTtBQUNBLE1BQUEsS0FBQSxDQUFBLFFBQUEsR0FBQSxFQUFBO0FBQ0EsTUFBQSxTQUFBLENBQUEsR0FBQSxDQUFBLFFBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7bURDdENRLE87Ozs7Ozs7OztvREFDQSxPOzs7Ozs7Ozs7Ozs7OztBQ0RUOzs7OztBQUtBLFNBQUEsY0FBQSxDQUFBLEVBQUEsRUFBNEM7QUFBQSxLQUFoQixXQUFnQixVQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsVUFBQSxDQUFBLE1BQUEsU0FBQSxHQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQUwsR0FBSzs7QUFDM0MsS0FBSSxVQUFBLEtBQUosQ0FBQTtBQUNBLFFBQUEsZ0JBQUEsQ0FBQSxRQUFBLEVBQWtDLFlBQVc7QUFDNUMsZUFBQSxPQUFBO0FBQ0EsWUFBVSxXQUFBLEVBQUEsRUFBVixRQUFVLENBQVY7QUFGRCxFQUFBO0FBSUE7O2tCQUVjLGM7Ozs7Ozs7O0FDYmYsU0FBQSxlQUFBLEdBQTJCO0FBQzFCLFVBQUEsU0FBQSxHQUFxQjtBQUNwQixTQUFPLFNBQUEsZUFBQSxDQUFQLFNBQUE7QUFDQTtBQUNELFVBQUEsR0FBQSxHQUFlO0FBQ2QsTUFBSSxjQUFKLENBQUEsRUFBcUI7QUFDcEIsVUFBQSxRQUFBLENBQUEsQ0FBQSxFQUFtQixDQUFDLEtBQUEsR0FBQSxDQUFVLGNBQVYsQ0FBQSxFQUFwQixDQUFvQixDQUFwQjtBQUNBLHlCQUFBLEdBQUE7QUFDQTtBQUNEO0FBQ0Q7QUFDQTtrQkFDYyxlIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0ICogYXMgVG9vbHMgZnJvbSAnLi90b29scydcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHRzY3JvbGxCdG5Jbml0KCk7XHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG5cdGNvbnN0IGRlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZlLXRvLXRvcCcpO1xyXG5cclxuXHQvKipcclxuXHQgKiDQn9C+0LrQsNC30YvQstCw0LXRgiDQutC90L7Qv9C60YMg0YHQutGA0L7Qu9CwINC60L7Qs9C00LAg0YHRgtGA0LDQvdC40YbQsCDQvdC40LbQtSDQstGL0YHQvtGC0Ysg0Y3QutGA0LDQvdCwXHJcblx0ICovXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cdFx0aWYgKGRlLnNjcm9sbFRvcCA+IGRlLmNsaWVudEhlaWdodCkge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiDQn9GA0L7QutGA0YPRgtC60LAg0YHRgtGA0LDQvdC40YbRiyDQuiDQvdCw0YfQsNC70YNcclxuICovXHJcbmZ1bmN0aW9uIHNjcm9sbEJ0bkluaXQoKSB7XHJcblx0Y29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vdmUtdG8tdG9wJyk7XHJcblx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVG9vbHMuc2Nyb2xsUGFnZVRvVG9wKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG9uV2luZG93TG9hZCk7XHJcbmZ1bmN0aW9uIG9uV2luZG93TG9hZCgpIHtcclxuXHRjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZWxvYWRlclwiKTtcclxuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHRcclxuXHQvLyDQv9C+0LrQsNC3INGN0LrRgNCw0L3QsCDQt9Cw0LPRgNGD0LfQutC40YdcclxuXHRwcmVsb2FkZXIuY2xhc3NMaXN0LmFkZChcImVuZFwiKTtcclxuXHRib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcclxuXHRib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XHJcbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIG9uV2luZG93UmVzaXplIH0gZnJvbSAnLi9vbldpbmRvd1Jlc2l6ZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2Nyb2xsUGFnZVRvVG9wIH0gZnJvbSAnLi9zY3JvbGxQYWdlVG9Ub3AnOyIsIi8qKlxyXG4gKiDQntC70LXQttC40LLQsNC10YIg0LjQt9C80LXQvdC10L3QuNC1INGA0LDQt9C80LXRgNC+0LIg0L7QutC90LAg0LHRgNCw0YPQt9C10YDQsCDQuCDQstGL0LfRi9Cy0LDQtdGCIGNiINC10YHQu9C4INC/0YDQuNCy0YvRgdC10LvQviDQstGA0LXQvNGPINGD0LrQsNC30LDQvdC90L7QtSDQsiBkdXJhdGlvblxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiDQutCw0LvQu9Cx0Y3QulxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTMwMF0g0LjQvdGC0LXRgNCy0LDQuyDQsiDQvNC40LvQu9C40YHQuNC60YPQvdC00LDRhVxyXG4gKi9cclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoY2IsIGR1cmF0aW9uID0gMzAwKSB7XHJcblx0bGV0IHRpbWVvdXQ7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoY2IsIGR1cmF0aW9uKTtcclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb25XaW5kb3dSZXNpemU7IiwiZnVuY3Rpb24gc2Nyb2xsUGFnZVRvVG9wKCkge1xyXG5cdGZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBydW4oKSB7XHJcblx0XHRpZiAoZ2V0U2Nyb2xsKCkgPiAwKSB7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxCeSgwLCAtTWF0aC5tYXgoKGdldFNjcm9sbCgpIC8gNiksIDEpKTtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1bik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJ1bigpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNjcm9sbFBhZ2VUb1RvcDsiXX0=
